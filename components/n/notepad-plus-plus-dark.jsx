import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-74fqbsy.css';
import '../../css/a/au084ob1x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-74fqbsy"/><path class="au084ob1x"/>`,
		"fallback": "selfhst:notepad-plus-plus-dark",
	});
}

export default Component;
