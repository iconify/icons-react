import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj5m3bbfz.css';
import '../../css/z/ziaiz_9lq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj5m3bbfz"/><path class="ziaiz_9lq"/>`,
		"fallback": "famicons:play-skip-back-outline",
	});
}

export default Component;
