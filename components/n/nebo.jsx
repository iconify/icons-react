import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfcqqsmiv.css';
import '../../css/r/ryf4c_b7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfcqqsmiv"/><path class="ryf4c_b7f"/>`,
		"fallback": "token:nebo",
	});
}

export default Component;
