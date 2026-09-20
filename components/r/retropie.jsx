import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx33tlbrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx33tlbrh"/>`,
		"fallback": "thesvg-color:retropie",
	});
}

export default Component;
