import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vr8hnubib.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vr8hnubib"/>`,
		"fallback": "wi:night-clear",
	});
}

export default Component;
