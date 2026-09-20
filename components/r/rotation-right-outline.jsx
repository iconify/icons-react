import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owy-2xwyv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owy-2xwyv"/>`,
		"fallback": "lsicon:rotation-right-outline",
	});
}

export default Component;
