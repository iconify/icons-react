import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi28eccsv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi28eccsv"/>`,
		"fallback": "game-icons:musical-score",
	});
}

export default Component;
