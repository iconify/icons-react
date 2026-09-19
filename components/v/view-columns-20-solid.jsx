import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muu80cxvy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muu80cxvy"/>`,
		"fallback": "heroicons:view-columns-20-solid",
	});
}

export default Component;
