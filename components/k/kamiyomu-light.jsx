import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p73-vbb6z.css';
import '../../css/z/z6eui5bmf.css';
import '../../css/k/k7xjikbow.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p73-vbb6z"/><path class="z6eui5bmf"/><path class="k7xjikbow"/>`,
		"fallback": "selfhst:kamiyomu-light",
	});
}

export default Component;
