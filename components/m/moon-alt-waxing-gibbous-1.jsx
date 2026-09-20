import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn4bs8axk.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn4bs8axk"/>`,
		"fallback": "wi:moon-alt-waxing-gibbous-1",
	});
}

export default Component;
