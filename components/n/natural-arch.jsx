import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aslg49b9u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aslg49b9u"/>`,
		"fallback": "temaki:natural-arch",
	});
}

export default Component;
