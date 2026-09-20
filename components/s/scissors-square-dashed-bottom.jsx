import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/limkoio6o.css';
import '../../css/d/d2umvjsxg.css';
import '../../css/y/yopadjb1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="limkoio6o"/><circle class="d2umvjsxg"/><circle class="yopadjb1x"/></g>`,
		"fallback": "lucide:scissors-square-dashed-bottom",
	});
}

export default Component;
