import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i_93fzumo.css';
import '../../css/s/s7e2jt5ro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i_93fzumo"/><path class="s7e2jt5ro"/></g>`,
		"fallback": "tabler:miliraty-award",
	});
}

export default Component;
