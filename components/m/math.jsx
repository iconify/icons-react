import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/o/o0lrg65in.css';
import '../../css/a/az4-p6b4d.css';
import '../../css/t/txdqe8b7q.css';
import '../../css/z/z-94r2gds.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="o0lrg65in"/><path class="az4-p6b4d"/><path class="txdqe8b7q"/><path class="z-94r2gds"/></g>`,
		"fallback": "glyphs-poly:math",
	});
}

export default Component;
