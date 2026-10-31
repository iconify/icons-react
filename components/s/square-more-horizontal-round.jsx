import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdgx7fuwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdgx7fuwr"/>`,
		"fallback": "coolicons:square-more-horizontal-round",
	});
}

export default Component;
