import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-sa-ubgx.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-sa-ubgx"/>`,
		"fallback": "octicon:plug",
	});
}

export default Component;
