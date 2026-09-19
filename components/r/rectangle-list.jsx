import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrectqbjy.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrectqbjy"/>`,
		"fallback": "fa6-regular:rectangle-list",
	});
}

export default Component;
