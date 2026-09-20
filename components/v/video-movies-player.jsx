import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-wkmz4ib.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-wkmz4ib"/>`,
		"fallback": "streamline-pixel:video-movies-player",
	});
}

export default Component;
