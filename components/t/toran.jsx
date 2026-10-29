import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu4ur2bsh.css';
import '../../css/s/sfk--8u6e.css';
import '../../css/g/gm8qkmbxw.css';
import '../../css/w/w3jaxb-qk.css';
import '../../css/s/sh7fc8kep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu4ur2bsh wm-shadow"/><path class="sfk--8u6e wm-k"/><path class="gm8qkmbxw wm-k"/><path class="w3jaxb-qk wm-a"/><path class="sh7fc8kep wm-a"/>`,
		"fallback": "withicons-pastel:toran",
	});
}

export default Component;
