import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izpvdbcpu.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izpvdbcpu"/>`,
		"fallback": "fa6-solid:kitchen-set",
	});
}

export default Component;
