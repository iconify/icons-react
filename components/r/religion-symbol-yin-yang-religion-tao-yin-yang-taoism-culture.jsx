import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xcv6q1bnv.css';
import '../../css/t/ttcmfbmjn.css';
import '../../css/l/lc3wwc2xz.css';
import '../../css/k/kogho7jkt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="xcv6q1bnv"/><path class="ttcmfbmjn"/><circle class="lc3wwc2xz"/><circle class="kogho7jkt"/></g>`,
		"fallback": "streamline:religion-symbol-yin-yang-religion-tao-yin-yang-taoism-culture",
	});
}

export default Component;
