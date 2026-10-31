import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eop8onyec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eop8onyec"/>`,
		"fallback": "coolicons:signpost-fill-round",
	});
}

export default Component;
