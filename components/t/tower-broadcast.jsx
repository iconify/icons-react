import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/os8x0cc1a.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="os8x0cc1a"/>`,
		"fallback": "fa6-solid:tower-broadcast",
	});
}

export default Component;
