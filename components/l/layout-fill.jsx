import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r01s9xbuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r01s9xbuq"/>`,
		"fallback": "eva:layout-fill",
	});
}

export default Component;
