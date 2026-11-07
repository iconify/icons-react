import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edf2mabxb.css';
import '../../css/b/bkvj9ck2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edf2mabxb"/><path class="bkvj9ck2i"/>`,
		"fallback": "solar:square-arrow-right-bold-duotone",
	});
}

export default Component;
