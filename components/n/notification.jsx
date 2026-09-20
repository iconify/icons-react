import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-_crhveu.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-_crhveu"/>`,
		"fallback": "memory:notification",
	});
}

export default Component;
