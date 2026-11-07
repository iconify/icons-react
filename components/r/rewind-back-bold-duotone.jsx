import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etgxem4dq.css';
import '../../css/g/gvegicjck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="etgxem4dq"/><path class="gvegicjck"/>`,
		"fallback": "solar:rewind-back-bold-duotone",
	});
}

export default Component;
