import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a51rmtbpv.css';

const viewBox = {"width":1026,"height":865};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a51rmtbpv"/>`,
		"fallback": "whh:paw",
	});
}

export default Component;
