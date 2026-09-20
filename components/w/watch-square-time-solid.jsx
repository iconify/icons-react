import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aglw7i7ro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aglw7i7ro"/>`,
		"fallback": "streamline-sharp:watch-square-time-solid",
	});
}

export default Component;
