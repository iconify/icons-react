import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa5bq-b-c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa5bq-b-c"/>`,
		"fallback": "at-icons:metaballs",
	});
}

export default Component;
