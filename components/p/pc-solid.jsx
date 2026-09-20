import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-7h8fb2z.css';
import '../../css/c/cega53b8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-7h8fb2z"/><path class="cega53b8w"/>`,
		"fallback": "pixel:pc-solid",
	});
}

export default Component;
