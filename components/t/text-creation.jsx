import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thgsep5_e.css';
import '../../css/i/ift-4msrf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thgsep5_e"/><path class="ift-4msrf"/>`,
		"fallback": "carbon:text-creation",
	});
}

export default Component;
