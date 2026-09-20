import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ive95xbok.css';
import '../../css/a/a5lh8nbos.css';
import '../../css/a/ak7k5s97a.css';
import '../../css/w/wzzmmnqec.css';

const viewBox = {"width":79,"height":78};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="ive95xbok"/><path class="a5lh8nbos"/><path class="ak7k5s97a"/><path class="wzzmmnqec"/></g>`,
		"fallback": "thesvg-color:postcss",
	});
}

export default Component;
