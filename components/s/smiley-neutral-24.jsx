import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umel8k68n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umel8k68n"/>`,
		"fallback": "octicon:smiley-neutral-24",
	});
}

export default Component;
