import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3k-tlztq.css';
import '../../css/u/u552tcc9b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3k-tlztq"/><path class="u552tcc9b"/>`,
		"fallback": "selfhst:mirotalk-light",
	});
}

export default Component;
