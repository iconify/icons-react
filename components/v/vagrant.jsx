import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu4ihg-sz.css';
import '../../css/x/x3brn5b_y.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu4ihg-sz"/><path class="x3brn5b_y"/>`,
		"fallback": "devicon-plain:vagrant",
	});
}

export default Component;
