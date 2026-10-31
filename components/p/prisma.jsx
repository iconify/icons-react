import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aan6a_4hn.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aan6a_4hn"/>`,
		"fallback": "devicon-plain:prisma",
	});
}

export default Component;
