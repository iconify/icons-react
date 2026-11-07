import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5e6tzbau.css';
import '../../css/l/lg5xwxuqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5e6tzbau"/><path clip-rule="evenodd" class="lg5xwxuqc"/>`,
		"fallback": "solar:washing-machine-minimalistic-bold",
	});
}

export default Component;
