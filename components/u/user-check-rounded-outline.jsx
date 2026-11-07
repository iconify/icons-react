import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6d250bwp.css';
import '../../css/c/cf8jt1bey.css';
import '../../css/j/jt-vrxbga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j6d250bwp"/><path class="cf8jt1bey"/><path clip-rule="evenodd" class="jt-vrxbga"/>`,
		"fallback": "solar:user-check-rounded-outline",
	});
}

export default Component;
