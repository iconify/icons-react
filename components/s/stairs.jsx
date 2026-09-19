import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8fqnnf_x.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8fqnnf_x"/>`,
		"fallback": "fa6-solid:stairs",
	});
}

export default Component;
