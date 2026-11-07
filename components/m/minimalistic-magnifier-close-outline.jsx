import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p63rntbns.css';
import '../../css/w/wmcky1b9o.css';
import '../../css/w/w314yoqtw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p63rntbns"/><path class="wmcky1b9o"/><path clip-rule="evenodd" class="w314yoqtw"/>`,
		"fallback": "solar:minimalistic-magnifier-close-outline",
	});
}

export default Component;
