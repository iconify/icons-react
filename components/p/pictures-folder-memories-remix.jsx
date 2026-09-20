import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmg0r4s3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vmg0r4s3c"/>`,
		"fallback": "streamline-sharp:pictures-folder-memories-remix",
	});
}

export default Component;
