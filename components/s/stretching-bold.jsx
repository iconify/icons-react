import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l10h6cbda.css';
import '../../css/y/yv3sgvbaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l10h6cbda"/><path clip-rule="evenodd" class="yv3sgvbaa"/>`,
		"fallback": "solar:stretching-bold",
	});
}

export default Component;
