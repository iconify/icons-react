import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/o/osadutb4f.css';
import '../../css/c/cs3-aebaf.css';
import '../../css/z/znp9c_b1c.css';
import '../../css/l/lehj6_a8s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="osadutb4f"/><rect class="cs3-aebaf"/><rect class="znp9c_b1c"/><rect class="lehj6_a8s"/></g>`,
		"fallback": "glyphs:layout-2-bold",
	});
}

export default Component;
