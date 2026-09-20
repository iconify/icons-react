import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dg-jsj0wt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dg-jsj0wt"/>`,
		"fallback": "streamline-flex:warehouse-1-solid",
	});
}

export default Component;
