import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa1eiqb9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wa1eiqb9z"/>`,
		"fallback": "reicon:walk2",
	});
}

export default Component;
