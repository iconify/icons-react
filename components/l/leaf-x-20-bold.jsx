import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyzyqw1hp.css';
import '../../css/k/ko4o_xbkk.css';
import '../../css/q/q8yf954uh.css';
import '../../css/m/mrzlzgbxo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyzyqw1hp"/><path class="ko4o_xbkk"/><path class="q8yf954uh"/><path class="mrzlzgbxo"/>`,
		"fallback": "energy-icons:leaf-x-20-bold",
	});
}

export default Component;
