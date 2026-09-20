import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fciw2bcys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fciw2bcys"/>`,
		"fallback": "tabler:spiral",
	});
}

export default Component;
