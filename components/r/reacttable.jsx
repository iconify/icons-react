import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u861_z2tv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u861_z2tv"/>`,
		"fallback": "simple-icons:reacttable",
	});
}

export default Component;
