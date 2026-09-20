import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_z_y4bhj.css';

const viewBox = {"width":110,"height":48.7};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_z_y4bhj"/>`,
		"fallback": "thesvg-color:russian-railways-light",
	});
}

export default Component;
