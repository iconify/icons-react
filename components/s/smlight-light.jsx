import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0pgifn5c.css';
import '../../css/w/wg8i2zvek.css';
import '../../css/p/pn8gj6_kf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="e0pgifn5c"/><circle class="wg8i2zvek"/><circle class="pn8gj6_kf"/>`,
		"fallback": "selfhst:smlight-light",
	});
}

export default Component;
