import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smt1xtbud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smt1xtbud"/>`,
		"fallback": "uil:pricetag-alt",
	});
}

export default Component;
