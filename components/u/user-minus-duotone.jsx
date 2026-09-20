import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f99tpmb6q.css';
import '../../css/e/ew-5e-iwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f99tpmb6q"/><path class="ew-5e-iwx"/>`,
		"fallback": "stash:user-minus-duotone",
	});
}

export default Component;
