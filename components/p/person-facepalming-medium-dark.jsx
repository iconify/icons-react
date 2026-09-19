import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xag1dhbsb.css';
import '../../css/o/obrk1o0nl.css';
import '../../css/d/dr87lhb5t.css';
import '../../css/l/lwcz10bzl.css';
import '../../css/x/xq76j8b7o.css';
import '../../css/n/nmx-7q8uv.css';
import '../../css/l/lzze26bok.css';
import '../../css/z/zrsp9vqoz.css';
import '../../css/f/f2egsuujx.css';
import '../../css/c/crckubbpe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xag1dhbsb"/><path class="obrk1o0nl"/><path class="dr87lhb5t"/><path class="lwcz10bzl"/><path class="xq76j8b7o"/><path class="nmx-7q8uv"/><path class="lzze26bok"/><path class="zrsp9vqoz"/><path class="f2egsuujx"/><path class="crckubbpe"/></g>`,
		"fallback": "fluent-emoji-flat:person-facepalming-medium-dark",
	});
}

export default Component;
