import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwrybibvp.css';
import '../../css/h/hf_2iyb6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwrybibvp"/><path class="hf_2iyb6f"/>`,
		"fallback": "tdesign:numbers-circle-4-filled",
	});
}

export default Component;
