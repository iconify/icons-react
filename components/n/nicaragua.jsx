import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v56opriaa.css';
import '../../css/d/d1x_6zbkv.css';
import '../../css/w/wud5a85_x.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v56opriaa"/><path class="d1x_6zbkv"/><path class="wud5a85_x"/>`,
		"fallback": "tabler-flags:nicaragua",
	});
}

export default Component;
