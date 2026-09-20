import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuq_5p.css';
import '../../css/s/so-from-62.css';
import '../../css/t/tr-b5mmly.css';
import '../../css/f/fill-to-1.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuq_5p"/>`,
		"fallback": "line-md:phone-filled-loop",
	});
}

export default Component;
