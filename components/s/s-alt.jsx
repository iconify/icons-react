import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sws6u3btr.css';
import '../../css/b/blhityb7b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sws6u3btr"/><path class="blhityb7b"/>`,
		"fallback": "carbon:s-alt",
	});
}

export default Component;
