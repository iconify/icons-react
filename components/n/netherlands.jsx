import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1x_6zbkv.css';
import '../../css/p/pmzzwna2i.css';
import '../../css/n/nxbvtcbef.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1x_6zbkv"/><path class="pmzzwna2i"/><path class="nxbvtcbef"/>`,
		"fallback": "tabler-flags:netherlands",
	});
}

export default Component;
