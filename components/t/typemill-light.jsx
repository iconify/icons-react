import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sildfsqje.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sildfsqje"/>`,
		"fallback": "selfhst:typemill-light",
	});
}

export default Component;
