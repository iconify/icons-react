import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syj7luboi.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syj7luboi"/>`,
		"fallback": "f7:projective",
	});
}

export default Component;
