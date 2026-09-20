import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyx5u8btq.css';
import '../../css/d/d-beombpy.css';
import '../../css/y/ygr8_mw8f.css';
import '../../css/m/myuqn2b_x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyx5u8btq"/><path class="d-beombpy"/><path class="ygr8_mw8f"/><path class="myuqn2b_x"/>`,
		"fallback": "vaadin:qrcode",
	});
}

export default Component;
