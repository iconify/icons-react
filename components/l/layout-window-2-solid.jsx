import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4ljblbvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x4ljblbvu"/>`,
		"fallback": "streamline-sharp:layout-window-2-solid",
	});
}

export default Component;
