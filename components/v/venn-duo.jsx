import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dma-9m4cg.css';
import '../../css/a/a-maarbbx.css';
import '../../css/l/l4z54d3fx.css';
import '../../css/c/cd1fes1xs.css';
import '../../css/i/iyqajmo0c.css';
import '../../css/h/hj2910bua.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dma-9m4cg"/><path class="a-maarbbx"/><path class="l4z54d3fx"/><path class="cd1fes1xs"/><path class="iyqajmo0c"/><path class="hj2910bua"/></g>`,
		"fallback": "glyphs:venn-duo",
	});
}

export default Component;
