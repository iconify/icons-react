import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8ck8kqsp.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8ck8kqsp"/>`,
		"fallback": "fa7-solid:toilet-portable",
	});
}

export default Component;
