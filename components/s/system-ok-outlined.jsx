import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/giek2mg0i.css';
import '../../css/g/gw53p_brw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="giek2mg0i"/><path class="gw53p_brw"/>`,
		"fallback": "eos-icons:system-ok-outlined",
	});
}

export default Component;
