import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i78yvwbdu.css';
import '../../css/k/kbwzzybpy.css';
import '../../css/f/fkxqyxbsk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i78yvwbdu"/><path class="kbwzzybpy"/><path class="fkxqyxbsk"/>`,
		"fallback": "selfhst:logwell-dark",
	});
}

export default Component;
