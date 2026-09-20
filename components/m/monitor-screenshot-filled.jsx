import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2z-9u.css';
import '../../css/g/g26hbu.css';
import '../../css/t/t5pxry.css';
import '../../css/z/zxndow.css';
import '../../css/i/ik5ydf.css';
import '../../css/a/ay17qu.css';
import '../../css/y/y4wbml.css';
import '../../css/o/o9gz3y.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-70.css';
import '../../css/f/fill-to-1.css';
import '../../css/d/d-fwg6_w.css';
import '../../css/d/d-7yzihk.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJPakwcbH"><path class="d2z-9u g26hbu t5pxry zxndow"/><path class="g26hbu ik5ydf"/><path class="ay17qu t5pxry y4wbml zxndow"/><path class="o9gz3y t5pxry y4wbml"/></mask></defs><path mask="url(#SVGJPakwcbH)" class="botfzx"/>`,
		"fallback": "line-md:monitor-screenshot-filled",
	});
}

export default Component;
