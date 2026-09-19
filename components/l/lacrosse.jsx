import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alnov8bls.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alnov8bls"/>`,
		"fallback": "fluent-emoji-high-contrast:lacrosse",
	});
}

export default Component;
