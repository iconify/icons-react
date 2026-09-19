import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c13o2wbqp.css';
import '../../css/t/tnle1tu0a.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c13o2wbqp"/><path class="tnle1tu0a"/>`,
		"fallback": "devicon:luau",
	});
}

export default Component;
