import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fi7vqwb0l.css';
import '../../css/t/tlx_fcsoo.css';
import '../../css/v/v08vece2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fi7vqwb0l"/><path class="tlx_fcsoo"/><path class="v08vece2k"/></g>`,
		"fallback": "hugeicons:wallet-add-01",
	});
}

export default Component;
