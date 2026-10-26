import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg2o60bfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tg2o60bfc"/>`,
		"fallback": "healthicons:virus-alt-24px",
	});
}

export default Component;
