import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_ke4c.css';
import '../../css/t/t5pxry.css';
import '../../css/z/zxndow.css';
import '../../css/i/ip662n.css';
import '../../css/y/y4wbml.css';
import '../../css/x/x3_5_r.css';
import '../../css/y/y4gl7b.css';
import '../../css/b/botfzx.css';
import '../../css/w/wgacfi.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-46.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGW94YBFFP"><path class="r_ke4c t5pxry zxndow"/><path class="ip662n t5pxry y4wbml zxndow"/><path class="t5pxry x3_5_r y4gl7b y4wbml"/></mask></defs><path mask="url(#SVGW94YBFFP)" class="botfzx"/><path class="t5pxry wgacfi x3_5_r y4wbml"/>`,
		"fallback": "line-md:lightbulb-off-twotone",
	});
}

export default Component;
