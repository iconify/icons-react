import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-jm55j8c.css';
import '../../css/j/j-o8fhbra.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-jm55j8c"/><path class="j-o8fhbra"/>`,
		"fallback": "energy-icons:ladle-20-bold",
	});
}

export default Component;
