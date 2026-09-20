import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utsk9mbdc.css';
import '../../css/a/a1wz2fbea.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utsk9mbdc"/><path class="a1wz2fbea"/>`,
		"fallback": "streamline-pixel:photography-photo-image",
	});
}

export default Component;
