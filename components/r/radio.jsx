import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcagx4xdn.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcagx4xdn"/>`,
		"fallback": "picon:radio",
	});
}

export default Component;
