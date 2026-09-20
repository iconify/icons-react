import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffjcht.css';
import '../../css/t/t5pxry.css';
import '../../css/z/zxndow.css';
import '../../css/i/ip662n.css';
import '../../css/y/y4wbml.css';
import '../../css/y/y4gl7b.css';
import '../../css/z/z543hs.css';
import '../../css/b/botfzx.css';
import '../../css/w/wgacfi.css';
import '../../css/s/so-from-46.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQ94up4tc"><path class="ffjcht t5pxry zxndow"/><path class="ip662n t5pxry y4wbml zxndow"/><path class="t5pxry y4gl7b y4wbml z543hs"/></mask></defs><path mask="url(#SVGQ94up4tc)" class="botfzx"/><path class="t5pxry wgacfi y4wbml z543hs"/>`,
		"fallback": "line-md:lightbulb-off-filled",
	});
}

export default Component;
