import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-mrup4sw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m-mrup4sw"/>`,
		"fallback": "streamline-sharp:pyramid-shape-solid",
	});
}

export default Component;
