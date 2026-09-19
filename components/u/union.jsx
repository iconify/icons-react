import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/noxz_jmun.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="noxz_jmun"/>`,
		"fallback": "fa-solid:union",
	});
}

export default Component;
