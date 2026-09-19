import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqchw4btd.css';
import '../../css/n/n-_q50uul.css';
import '../../css/c/c5k-29ekc.css';
import '../../css/s/sw6ucfvzz.css';
import '../../css/q/qr3e8bben.css';
import '../../css/m/m3v6hfb1d.css';
import '../../css/f/fxkiyvbxd.css';
import '../../css/u/urjqw-26x.css';
import '../../css/r/rei7dnb1m.css';
import '../../css/h/hgzww4bao.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqchw4btd"/><path class="n-_q50uul"/><path class="c5k-29ekc"/><path class="sw6ucfvzz"/><path class="qr3e8bben"/><path class="m3v6hfb1d"/><path class="fxkiyvbxd"/><ellipse class="urjqw-26x"/><path class="rei7dnb1m"/><path class="hgzww4bao"/>`,
		"fallback": "devicon:redis",
	});
}

export default Component;
