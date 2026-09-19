import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpofilb3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpofilb3p"/>`,
		"fallback": "iconamoon:trash-thin",
	});
}

export default Component;
