import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq-a-zw0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kq-a-zw0r"/>`,
		"fallback": "streamline-sharp:medical-folder-remix",
	});
}

export default Component;
