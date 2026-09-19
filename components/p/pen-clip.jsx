import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwwdm_2ru.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwwdm_2ru"/>`,
		"fallback": "fa6-solid:pen-clip",
	});
}

export default Component;
