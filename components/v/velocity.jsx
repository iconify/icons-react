import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exaqg9f9e.css';
import '../../css/j/joioafbdy.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path paint-order="fill markers stroke" class="exaqg9f9e"/><path class="joioafbdy"/>`,
		"fallback": "material-icon-theme:velocity",
	});
}

export default Component;
