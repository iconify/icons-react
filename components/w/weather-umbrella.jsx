import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0kbq7sil.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0kbq7sil"/>`,
		"fallback": "streamline-pixel:weather-umbrella",
	});
}

export default Component;
