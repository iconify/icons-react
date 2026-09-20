import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx5lto5hy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gx5lto5hy"/>`,
		"fallback": "streamline-sharp:recording-tape-2-solid",
	});
}

export default Component;
