import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4721q_ln.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path paint-order="fill markers stroke" class="o4721q_ln"/>`,
		"fallback": "material-icon-theme:quokka",
	});
}

export default Component;
