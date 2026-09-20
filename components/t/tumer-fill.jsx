import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bjvnklbeo.css';
import '../../css/m/mi0qvqbff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bjvnklbeo"/><path class="mi0qvqbff"/></g>`,
		"fallback": "lets-icons:tumer-fill",
	});
}

export default Component;
