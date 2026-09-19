import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtqh2o4ny.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gtqh2o4ny"/>`,
		"fallback": "gravity-ui:tag-ruble",
	});
}

export default Component;
