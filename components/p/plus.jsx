import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgnr7vmgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgnr7vmgo"/>`,
		"fallback": "tdesign:plus",
	});
}

export default Component;
