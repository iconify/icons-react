import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0dmoy_jy.css';
import '../../css/z/zpx94h-bl.css';
import '../../css/y/yiook0b5l.css';
import '../../css/i/io-vn9b5p.css';
import '../../css/s/swdohebjr.css';
import '../../css/z/zqdwlbpai.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0dmoy_jy"/><path class="zpx94h-bl"/><path class="yiook0b5l"/><path class="io-vn9b5p"/><path class="swdohebjr"/><path class="zqdwlbpai"/>`,
		"fallback": "selfhst:posterizarr-dark",
	});
}

export default Component;
