import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezk93g3ho.css';
import '../../css/b/b2b32nzwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezk93g3ho"/><path class="b2b32nzwh"/>`,
		"fallback": "solar:waterdrop-bold-duotone",
	});
}

export default Component;
