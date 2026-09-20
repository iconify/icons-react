import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fka0enb1w.css';
import '../../css/v/vocpnzbzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fka0enb1w"/><path class="vocpnzbzx"/>`,
		"fallback": "mingcute:pisa-tower-line",
	});
}

export default Component;
