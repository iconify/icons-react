import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh3vw6hqx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh3vw6hqx"/>`,
		"fallback": "heroicons:musical-note-16-solid",
	});
}

export default Component;
