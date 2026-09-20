import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unm720e2p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unm720e2p"/>`,
		"fallback": "pinhead:locked-lock-with-keyhole",
	});
}

export default Component;
