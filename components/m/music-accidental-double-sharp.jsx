import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hatwqt0ue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hatwqt0ue"/>`,
		"fallback": "mdi:music-accidental-double-sharp",
	});
}

export default Component;
