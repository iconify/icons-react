import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2o3sh-9c.css';
import '../../css/k/kq38ase1a.css';
import '../../css/y/ypclhjnqv.css';
import '../../css/u/uaycyrbmu.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG3CSwIdnl" class="m2o3sh-9c"/></defs><path class="kq38ase1a"/><path class="ypclhjnqv"/><path class="clr-i-alert uaycyrbmu"/><use href="#SVG3CSwIdnl"/><use href="#SVG3CSwIdnl"/>`,
		"fallback": "clarity:map-outline-alerted",
	});
}

export default Component;
