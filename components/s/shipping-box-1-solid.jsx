import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrp7z4j1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wrp7z4j1c"/>`,
		"fallback": "streamline-sharp:shipping-box-1-solid",
	});
}

export default Component;
