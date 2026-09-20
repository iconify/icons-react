import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsthg0bza.css';
import '../../css/p/pptl0qd1i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsthg0bza"/><path class="pptl0qd1i"/>`,
		"fallback": "streamline-pixel:school-science-dna",
	});
}

export default Component;
