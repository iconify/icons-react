import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mh2ol5bjg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mh2ol5bjg"/>`,
		"fallback": "pajamas:time-out",
	});
}

export default Component;
