import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ismx1bcqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ismx1bcqi"/>`,
		"fallback": "eos-icons:proxy",
	});
}

export default Component;
