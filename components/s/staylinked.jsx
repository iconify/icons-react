import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjlxl3bmy.css';

const viewBox = {"width":440,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjlxl3bmy"/>`,
		"fallback": "fa6-brands:staylinked",
	});
}

export default Component;
