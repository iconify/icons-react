import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fi7vqwb0l.css';
import '../../css/t/tlx_fcsoo.css';
import '../../css/l/lsbtrvido.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fi7vqwb0l"/><path class="tlx_fcsoo"/><path class="lsbtrvido"/></g>`,
		"fallback": "hugeicons:wallet-remove-01",
	});
}

export default Component;
