import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2ot_552a.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2ot_552a"/>`,
		"fallback": "f7:money-rubl-circle",
	});
}

export default Component;
