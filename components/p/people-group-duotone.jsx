import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xce_36ygs.css';
import '../../css/u/u6urlybip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xce_36ygs"/><path class="u6urlybip"/>`,
		"fallback": "stash:people-group-duotone",
	});
}

export default Component;
