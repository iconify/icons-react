import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_hfiljnt.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_hfiljnt"/>`,
		"fallback": "f7:phone-arrow-down-left",
	});
}

export default Component;
