import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqj9iy2ft.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qqj9iy2ft"/>`,
		"fallback": "streamline-plump:sunset-solid",
	});
}

export default Component;
