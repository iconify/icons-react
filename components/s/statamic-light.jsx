import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn0z7abwo.css';
import '../../css/v/vi98df-3j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn0z7abwo"/><path class="vi98df-3j"/>`,
		"fallback": "selfhst:statamic-light",
	});
}

export default Component;
