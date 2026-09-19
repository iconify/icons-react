import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shwsux49d.css';
import '../../css/d/dw3dc8bje.css';
import '../../css/w/wjshhri2h.css';
import '../../css/e/ev13-2x6v.css';
import '../../css/m/m7v4xqvbw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shwsux49d"/><path class="dw3dc8bje"/><path class="wjshhri2h"/><path class="ev13-2x6v"/><path class="m7v4xqvbw"/>`,
		"fallback": "ion:ios-mic-off",
	});
}

export default Component;
