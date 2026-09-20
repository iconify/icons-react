import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz_z0jb7v.css';

const viewBox = {"width":256,"height":168};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dz_z0jb7v"/>`,
		"fallback": "thesvg-color:nuxt",
	});
}

export default Component;
