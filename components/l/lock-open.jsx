import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vaicczq3j.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vaicczq3j"/>`,
		"fallback": "fa-solid:lock-open",
	});
}

export default Component;
