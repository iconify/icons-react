import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfq4g4h5f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfq4g4h5f"/>`,
		"fallback": "ooui:next-ltr",
	});
}

export default Component;
