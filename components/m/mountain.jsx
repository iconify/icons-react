import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ix7je5b7b.css';
import '../../css/p/pxd2iubby.css';
import '../../css/z/z2rgvhb3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ix7je5b7b wm-deco"/><path class="pxd2iubby"/><path class="z2rgvhb3s"/>`,
		"fallback": "withicons-bauhaus:mountain",
	});
}

export default Component;
