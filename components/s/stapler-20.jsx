import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9if2ebze.css';
import '../../css/e/eog-i8bei.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9if2ebze"/><path class="eog-i8bei"/>`,
		"fallback": "energy-icons:stapler-20",
	});
}

export default Component;
