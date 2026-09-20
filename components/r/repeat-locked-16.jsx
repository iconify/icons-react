import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lujml7c8c.css';
import '../../css/i/i_6j01bti.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lujml7c8c"/><path clip-rule="evenodd" class="i_6j01bti"/>`,
		"fallback": "qlementine-icons:repeat-locked-16",
	});
}

export default Component;
