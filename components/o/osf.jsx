import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkdqsnrvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkdqsnrvq"/>`,
		"fallback": "thesvg-color:osf",
	});
}

export default Component;
