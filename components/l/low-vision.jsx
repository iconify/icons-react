import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr1uwtbsq.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr1uwtbsq"/>`,
		"fallback": "fa-solid:low-vision",
	});
}

export default Component;
