import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eu06nbbze.css';
import '../../css/y/ynvzr33or.css';
import '../../css/o/o88qfn09d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eu06nbbze"/><path class="ynvzr33or"/><path class="o88qfn09d"/></g>`,
		"fallback": "at-icons:laser",
	});
}

export default Component;
