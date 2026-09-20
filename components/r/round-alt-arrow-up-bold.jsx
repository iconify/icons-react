import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfxbh8bsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zfxbh8bsn"/>`,
		"fallback": "solar:round-alt-arrow-up-bold",
	});
}

export default Component;
