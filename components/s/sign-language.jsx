import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfw2-nb3p.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfw2-nb3p"/>`,
		"fallback": "fa-solid:sign-language",
	});
}

export default Component;
