import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-em5bclj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-em5bclj"/>`,
		"fallback": "tdesign:letters-c",
	});
}

export default Component;
