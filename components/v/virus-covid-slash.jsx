import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/peyg7cbqu.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="peyg7cbqu"/>`,
		"fallback": "fa7-solid:virus-covid-slash",
	});
}

export default Component;
