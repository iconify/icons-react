import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uk3ezf1jl.css';
import '../../css/z/zi9dfiz4r.css';
import '../../css/o/ocvzv_b9j.css';
import '../../css/o/o85zjk0zp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uk3ezf1jl"/><rect class="zi9dfiz4r"/><rect class="ocvzv_b9j"/><rect class="o85zjk0zp"/></g>`,
		"fallback": "glyphs:sliders-bold",
	});
}

export default Component;
