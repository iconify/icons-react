import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w2qyan13r.css';
import '../../css/k/kml_vxiyu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="w2qyan13r"/><path class="kml_vxiyu"/></g>`,
		"fallback": "streamline:phone-qr",
	});
}

export default Component;
