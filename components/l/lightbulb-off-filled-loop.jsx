import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffjcht.css';
import '../../css/t/t5pxry.css';
import '../../css/z/zxndow.css';
import '../../css/i/ip662n.css';
import '../../css/y/y4wbml.css';
import '../../css/q/qyz9dq.css';
import '../../css/b/botfzx.css';
import '../../css/p/pjtc1b.css';
import '../../css/s/so-from-46.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';
import '../../css/d/d-2dk93e.css';
import '../../css/d/d-l5brra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnNARbbzT"><path class="ffjcht t5pxry zxndow"/><path class="ip662n t5pxry y4wbml zxndow"/><path class="qyz9dq t5pxry y4wbml"/></mask></defs><path mask="url(#SVGnNARbbzT)" class="botfzx"/><path class="pjtc1b t5pxry y4wbml"/>`,
		"fallback": "line-md:lightbulb-off-filled-loop",
	});
}

export default Component;
