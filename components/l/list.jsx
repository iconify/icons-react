import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apee3r9_p.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apee3r9_p"/>`,
		"fallback": "websymbol:list",
	});
}

export default Component;
