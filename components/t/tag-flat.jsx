import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ohs1b32al.css';
import '../../css/a/anpecqbub.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ohs1b32al"/><path class="anpecqbub"/></g>`,
		"fallback": "streamline-color:tag-flat",
	});
}

export default Component;
