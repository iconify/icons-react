import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7tbn3bau.css';
import '../../css/u/uc95oo_ln.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7tbn3bau"/><path class="uc95oo_ln"/>`,
		"fallback": "energy-icons:table-tennis-20",
	});
}

export default Component;
