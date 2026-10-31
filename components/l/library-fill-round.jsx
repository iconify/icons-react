import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwwb8k8on.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwwb8k8on"/>`,
		"fallback": "coolicons:library-fill-round",
	});
}

export default Component;
