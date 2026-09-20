import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg0p46jjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg0p46jjy"/>`,
		"fallback": "streamline-sharp:magic-wand-2",
	});
}

export default Component;
