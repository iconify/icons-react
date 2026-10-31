import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1lgfrm_m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d1lgfrm_m"/>`,
		"fallback": "sidekickicons:star-half-20-solid",
	});
}

export default Component;
