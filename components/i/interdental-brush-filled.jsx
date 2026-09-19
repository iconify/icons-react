import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktp477bmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktp477bmy"/>`,
		"fallback": "griddy-icons:interdental-brush-filled",
	});
}

export default Component;
