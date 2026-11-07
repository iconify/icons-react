import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ik_1hnawp.css';
import '../../css/f/fhqkw7bht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ik_1hnawp"/><path class="fhqkw7bht"/>`,
		"fallback": "solar:link-round-bold-duotone",
	});
}

export default Component;
