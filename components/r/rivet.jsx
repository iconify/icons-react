import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdd5i1b8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdd5i1b8m"/>`,
		"fallback": "mdi:rivet",
	});
}

export default Component;
