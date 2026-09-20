import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfxt1osmp.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfxt1osmp"/>`,
		"fallback": "lineicons:line-height",
	});
}

export default Component;
