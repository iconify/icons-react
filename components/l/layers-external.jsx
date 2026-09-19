import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-dmpsp-p.css';
import '../../css/n/n2fkhdu9u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-dmpsp-p"/><path class="n2fkhdu9u"/>`,
		"fallback": "carbon:layers-external",
	});
}

export default Component;
