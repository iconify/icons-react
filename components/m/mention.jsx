import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ove4_sb6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ove4_sb6z"/>`,
		"fallback": "fe:mention",
	});
}

export default Component;
