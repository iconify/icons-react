import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt1e66bqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt1e66bqw"/>`,
		"fallback": "boxicons:pen-plus",
	});
}

export default Component;
