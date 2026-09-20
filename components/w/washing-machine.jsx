import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok_5v3ylq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok_5v3ylq"/>`,
		"fallback": "pinhead:washing-machine",
	});
}

export default Component;
