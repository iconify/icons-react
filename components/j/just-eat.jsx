import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scz_7ub2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scz_7ub2t"/>`,
		"fallback": "thesvg:just-eat",
	});
}

export default Component;
