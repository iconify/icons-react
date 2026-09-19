import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qf73feb6n.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qf73feb6n"/>`,
		"fallback": "f7:mic-slash-fill",
	});
}

export default Component;
