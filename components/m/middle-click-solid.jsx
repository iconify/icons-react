import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnfs7ie5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tnfs7ie5y"/>`,
		"fallback": "streamline-sharp:middle-click-solid",
	});
}

export default Component;
