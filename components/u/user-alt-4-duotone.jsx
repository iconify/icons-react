import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c-ajn4b-a.css';
import '../../css/m/mqlt7_j-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c-ajn4b-a"/><path class="mqlt7_j-i"/></g>`,
		"fallback": "si:user-alt-4-duotone",
	});
}

export default Component;
