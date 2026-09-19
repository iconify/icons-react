import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfa1i2-ds.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfa1i2-ds"/>`,
		"fallback": "fa6-solid:teeth-open",
	});
}

export default Component;
