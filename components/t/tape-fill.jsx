import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mg0no7k9h.css';
import '../../css/j/j8jcxpbfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mg0no7k9h"/><path class="j8jcxpbfq"/></g>`,
		"fallback": "keyline-icons:tape-fill",
	});
}

export default Component;
