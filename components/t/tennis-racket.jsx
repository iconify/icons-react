import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t_ut08bvk.css';
import '../../css/w/wz8qjkb2i.css';
import '../../css/o/o1u583b9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t_ut08bvk"/><path class="wz8qjkb2i"/><circle class="o1u583b9p"/></g>`,
		"fallback": "lucide-lab:tennis-racket",
	});
}

export default Component;
