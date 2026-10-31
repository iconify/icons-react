import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx64cwy3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx64cwy3l"/>`,
		"fallback": "coolicons:spell-check-fill-round",
	});
}

export default Component;
