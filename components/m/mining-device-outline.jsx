import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/ilbeybc2v.css';
import '../../css/a/aqhok2bbj.css';
import '../../css/p/purz4ubxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="ilbeybc2v"/><circle class="aqhok2bbj"/><path class="purz4ubxf"/></g>`,
		"fallback": "bitcoin-icons:mining-device-outline",
	});
}

export default Component;
