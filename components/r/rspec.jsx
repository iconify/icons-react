import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzghodlei.css';
import '../../css/f/f9yyg-b3m.css';
import '../../css/u/uys2z4s7k.css';
import '../../css/r/r1tlpd6cz.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzghodlei"/><path class="f9yyg-b3m"/><path class="uys2z4s7k"/><path class="r1tlpd6cz"/>`,
		"fallback": "devicon:rspec",
	});
}

export default Component;
