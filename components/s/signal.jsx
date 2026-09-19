import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npn5p1brz.css';

const viewBox = {"width":963,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npn5p1brz"/>`,
		"fallback": "websymbol:signal",
	});
}

export default Component;
