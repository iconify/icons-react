import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kynbx4b0y.css';
import '../../css/y/yku_4z9pl.css';
import '../../css/u/uee0bnb9m.css';
import '../../css/k/k2qweuboq.css';
import '../../css/c/c7og3ua_o.css';
import '../../css/t/ti19ytbje.css';
import '../../css/j/j2ibbyx1m.css';
import '../../css/j/jph9y6bxg.css';
import '../../css/d/d9m7ty33z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGgB2Crdwk" cx="66.2" cy="55.2" r="147.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="kynbx4b0y"/><stop offset=".85" class="yku_4z9pl"/><stop offset="1" class="yku_4z9pl"/></radialGradient></defs><path class="uee0bnb9m"/><path fill="url(#SVGgB2Crdwk)" transform="matrix(2.8 0 0 2.8 -28.016 -28.016)" class="k2qweuboq"/><path class="c7og3ua_o"/><path class="ti19ytbje"/><path class="j2ibbyx1m"/><path class="jph9y6bxg"/><path class="d9m7ty33z"/>`,
		"fallback": "xero-emoji:sparkle",
	});
}

export default Component;
