import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fve4swbro.css';
import '../../css/o/os335z1oi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fve4swbro"/><path class="os335z1oi"/>`,
		"fallback": "energy-icons:sticky-note-20",
	});
}

export default Component;
