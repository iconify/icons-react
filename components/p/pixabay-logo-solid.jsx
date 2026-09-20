import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py0o4xekj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="py0o4xekj"/>`,
		"fallback": "streamline-logos:pixabay-logo-solid",
	});
}

export default Component;
