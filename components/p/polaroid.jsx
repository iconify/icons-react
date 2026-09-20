import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/y/y0wd1cbyv.css';
import '../../css/h/hzwgu_bvm.css';
import '../../css/h/htpoaxbaj.css';
import '../../css/o/ovze9ktjv.css';
import '../../css/v/vn3hvpptx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="y0wd1cbyv"/><path class="hzwgu_bvm"/><path class="htpoaxbaj"/><path class="ovze9ktjv"/><path class="vn3hvpptx"/></g>`,
		"fallback": "streamline-sharp-color:polaroid",
	});
}

export default Component;
