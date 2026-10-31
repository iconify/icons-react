import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1x_6zbkv.css';
import '../../css/y/y55zcjfsz.css';
import '../../css/y/yrwoiybrn.css';
import '../../css/f/fa--9cbnd.css';
import '../../css/p/pf622-vpv.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1x_6zbkv"/><path class="y55zcjfsz"/><path class="yrwoiybrn"/><path class="fa--9cbnd"/><path class="pf622-vpv"/>`,
		"fallback": "tabler-flags:jordan",
	});
}

export default Component;
