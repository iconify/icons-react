import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtlgi2xgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtlgi2xgz"/>`,
		"fallback": "bxs:package",
	});
}

export default Component;
