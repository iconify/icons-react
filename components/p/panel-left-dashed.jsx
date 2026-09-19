import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otbfd4iee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otbfd4iee"/>`,
		"fallback": "hugeicons:panel-left-dashed",
	});
}

export default Component;
