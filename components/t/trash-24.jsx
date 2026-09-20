import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sq3da4h7l.css';
import '../../css/s/slygv4qud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sq3da4h7l"/><path class="slygv4qud"/>`,
		"fallback": "octicon:trash-24",
	});
}

export default Component;
