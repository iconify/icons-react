import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z2mk2abte.css';
import '../../css/k/k0i46jeje.css';
import '../../css/x/x480hcczg.css';
import '../../css/h/hhs2t3bdg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z2mk2abte"/><path class="k0i46jeje"/><path clip-rule="evenodd" class="x480hcczg"/><path class="hhs2t3bdg"/></g>`,
		"fallback": "fluent-emoji-flat:right-facing-fist-dark",
	});
}

export default Component;
