import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-4y38biw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-4y38biw"/>`,
		"fallback": "nimbus:mate",
	});
}

export default Component;
