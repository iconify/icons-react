import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcqbabccs.css';
import '../../css/d/dgwj8cbvh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcqbabccs"/><path class="dgwj8cbvh"/>`,
		"fallback": "selfhst:nanote",
	});
}

export default Component;
