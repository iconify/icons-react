import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcw6aj2lz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcw6aj2lz"/>`,
		"fallback": "tabler:stack-pop",
	});
}

export default Component;
