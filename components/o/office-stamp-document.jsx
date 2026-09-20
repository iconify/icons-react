import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/u-lf6evcg.css';
import '../../css/o/oxa3pkv3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="u-lf6evcg"/><path class="oxa3pkv3o"/></g>`,
		"fallback": "streamline-ultimate:office-stamp-document",
	});
}

export default Component;
