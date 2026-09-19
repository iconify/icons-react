import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx5qhglug.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nx5qhglug"/>`,
		"fallback": "fa6-solid:mosquito",
	});
}

export default Component;
