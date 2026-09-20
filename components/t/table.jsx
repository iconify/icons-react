import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/phjvadcnz.css';
import '../../css/k/kta22xb0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="phjvadcnz"/><path class="kta22xb0o"/></g>`,
		"fallback": "proicons:table",
	});
}

export default Component;
