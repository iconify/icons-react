import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm8f8_abp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm8f8_abp"/>`,
		"fallback": "file-icons:oz",
	});
}

export default Component;
