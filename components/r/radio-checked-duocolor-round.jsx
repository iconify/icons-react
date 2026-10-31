import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lxix245uv.css';
import '../../css/t/t1x7x9bkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lxix245uv"/><path class="t1x7x9bkv"/></g>`,
		"fallback": "coolicons:radio-checked-duocolor-round",
	});
}

export default Component;
