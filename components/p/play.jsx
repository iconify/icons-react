import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gofesi5fa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gofesi5fa"/>`,
		"fallback": "icomoon-free:play",
	});
}

export default Component;
