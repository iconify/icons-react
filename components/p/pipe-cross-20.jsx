import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm-ms1i2h.css';
import '../../css/x/xe4qnpbmz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm-ms1i2h"/><path class="xe4qnpbmz"/>`,
		"fallback": "energy-icons:pipe-cross-20",
	});
}

export default Component;
