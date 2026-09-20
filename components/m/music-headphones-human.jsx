import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1ygzubzy.css';
import '../../css/p/pjqpfrbrk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1ygzubzy"/><path class="pjqpfrbrk"/>`,
		"fallback": "streamline-pixel:music-headphones-human",
	});
}

export default Component;
