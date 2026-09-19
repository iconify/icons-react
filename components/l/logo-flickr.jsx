import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjqtc9kwq.css';
import '../../css/n/nod8k7bwo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="sjqtc9kwq"/><circle class="nod8k7bwo"/>`,
		"fallback": "carbon:logo-flickr",
	});
}

export default Component;
