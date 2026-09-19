import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oucwh3zmg.css';
import '../../css/j/jnyh7fqkv.css';
import '../../css/s/s1cu90uay.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle transform="rotate(-1.057 159.995 423.97) scale(.99997)" class="oucwh3zmg"/><circle transform="matrix(.02382 -.9997 .9997 .02382 -48.51 798.282)" class="jnyh7fqkv"/><path class="s1cu90uay"/>`,
		"fallback": "ion:ios-cart",
	});
}

export default Component;
