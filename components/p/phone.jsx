import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9xv9fbxk.css';
import '../../css/o/o62a0f6-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9xv9fbxk wm-k"/><path class="o62a0f6-k wm-k"/>`,
		"fallback": "withicons-bauhaus:phone",
	});
}

export default Component;
