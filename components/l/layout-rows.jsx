import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myd67uc3k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="myd67uc3k"/>`,
		"fallback": "gravity-ui:layout-rows",
	});
}

export default Component;
