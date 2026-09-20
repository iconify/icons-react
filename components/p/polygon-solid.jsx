import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcpoq0b3d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lcpoq0b3d"/>`,
		"fallback": "streamline:polygon-solid",
	});
}

export default Component;
