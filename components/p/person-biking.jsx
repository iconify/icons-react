import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug0q3wbww.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug0q3wbww"/>`,
		"fallback": "fa7-solid:person-biking",
	});
}

export default Component;
