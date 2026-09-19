import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzw309b7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gzw309b7z"/>`,
		"fallback": "basil:mouse-alt-solid",
	});
}

export default Component;
