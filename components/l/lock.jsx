import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5lpkiu3h.css';
import '../../css/e/euvix8w7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5lpkiu3h"/><path class="euvix8w7j"/>`,
		"fallback": "circum:lock",
	});
}

export default Component;
