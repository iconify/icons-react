import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/boi9rwbof.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="boi9rwbof"/>`,
		"fallback": "selfhst:irs-light",
	});
}

export default Component;
