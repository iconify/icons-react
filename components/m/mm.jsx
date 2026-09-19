import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rd8b6f9us.css';
import '../../css/i/iwg23acuw.css';
import '../../css/m/muqve3b3v.css';
import '../../css/j/jstusf5pk.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rd8b6f9us"/><path class="iwg23acuw"/><path class="muqve3b3v"/><path class="jstusf5pk"/></g>`,
		"fallback": "flagpack:mm",
	});
}

export default Component;
