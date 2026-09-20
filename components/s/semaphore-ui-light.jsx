import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8tbjn7pb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8tbjn7pb"/>`,
		"fallback": "selfhst:semaphore-ui-light",
	});
}

export default Component;
