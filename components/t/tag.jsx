import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afo6habgq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afo6habgq"/>`,
		"fallback": "uiw:tag",
	});
}

export default Component;
