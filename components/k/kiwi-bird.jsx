import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tera5-bjy.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tera5-bjy"/>`,
		"fallback": "fa6-solid:kiwi-bird",
	});
}

export default Component;
