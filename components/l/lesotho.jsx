import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1x_6zbkv.css';
import '../../css/t/ty0x_qewu.css';
import '../../css/a/aqt2kdbol.css';
import '../../css/w/w36ns7bac.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1x_6zbkv"/><path class="ty0x_qewu"/><path class="aqt2kdbol"/><path class="w36ns7bac"/>`,
		"fallback": "tabler-flags:lesotho",
	});
}

export default Component;
