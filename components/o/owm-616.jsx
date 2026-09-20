import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/boxar-4qs.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="boxar-4qs"/>`,
		"fallback": "wi:owm-616",
	});
}

export default Component;
