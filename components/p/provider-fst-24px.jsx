import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7_cfii8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7_cfii8k"/>`,
		"fallback": "healthicons:provider-fst-24px",
	});
}

export default Component;
