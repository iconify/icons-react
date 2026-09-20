import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx73xpb2j.css';
import '../../css/i/i-yovpx2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx73xpb2j"/><path class="i-yovpx2o"/>`,
		"fallback": "octicon:key-asterisk-24",
	});
}

export default Component;
