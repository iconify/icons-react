import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn2oaccna.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wn2oaccna"/>`,
		"fallback": "f7:plus-slash-minus",
	});
}

export default Component;
