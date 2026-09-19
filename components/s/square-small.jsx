import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/caq0d6f2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="caq0d6f2j"/>`,
		"fallback": "boxicons:square-small",
	});
}

export default Component;
