import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx95euwke.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yx95euwke"/>`,
		"fallback": "streamline-flex:pie-chart-solid",
	});
}

export default Component;
