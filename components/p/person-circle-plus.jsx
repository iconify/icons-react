import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af5t8lpnc.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af5t8lpnc"/>`,
		"fallback": "fa6-solid:person-circle-plus",
	});
}

export default Component;
