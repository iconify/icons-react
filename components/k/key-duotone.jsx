import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oy7jqabow.css';
import '../../css/k/kqaeisbkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oy7jqabow"/><path class="kqaeisbkg"/></g>`,
		"fallback": "keyline-icons:key-duotone",
	});
}

export default Component;
