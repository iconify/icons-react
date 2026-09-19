import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qeztyrbbn.css';
import '../../css/u/uen6t6bqt.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qeztyrbbn"/><path class="uen6t6bqt"/>`,
		"fallback": "devicon:reach",
	});
}

export default Component;
