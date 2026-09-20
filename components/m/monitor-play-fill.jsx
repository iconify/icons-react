import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zivg1ubor.css';
import '../../css/l/lbjvzrbch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zivg1ubor"/><path clip-rule="evenodd" class="lbjvzrbch"/>`,
		"fallback": "si:monitor-play-fill",
	});
}

export default Component;
