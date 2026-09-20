import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fvfectegd.css';
import '../../css/t/tivz0acsh.css';
import '../../css/f/fh7abmerb.css';
import '../../css/z/zhop2mb0x.css';
import '../../css/v/v4khei8ko.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fvfectegd"/><path class="tivz0acsh"/><path class="fh7abmerb"/><path class="zhop2mb0x"/><path class="v4khei8ko"/></g>`,
		"fallback": "streamline-kameleon-color:smartphone-qrcode-duo",
	});
}

export default Component;
