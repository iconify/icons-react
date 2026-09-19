import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcpdy7bmb.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcpdy7bmb"/>`,
		"fallback": "fa6-regular:star-half",
	});
}

export default Component;
