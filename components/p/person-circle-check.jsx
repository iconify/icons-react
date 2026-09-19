import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjn0y42br.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjn0y42br"/>`,
		"fallback": "fa7-solid:person-circle-check",
	});
}

export default Component;
