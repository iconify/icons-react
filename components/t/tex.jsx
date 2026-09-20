import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tow6czris.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tow6czris"/>`,
		"fallback": "tabler:tex",
	});
}

export default Component;
