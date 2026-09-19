import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dyi2rfatv.css';
import '../../css/s/s-dd5xbfr.css';
import '../../css/v/v3-ezgbay.css';
import '../../css/v/vzu-fbb3n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dyi2rfatv"/><path class="s-dd5xbfr"/><path clip-rule="evenodd" class="v3-ezgbay"/><path class="vzu-fbb3n"/></g>`,
		"fallback": "fluent-emoji-flat:sweat-droplets",
	});
}

export default Component;
