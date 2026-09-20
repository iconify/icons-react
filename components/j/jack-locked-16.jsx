import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxb4qkbhf.css';
import '../../css/i/ivphhvj4r.css';
import '../../css/p/p4rsgjvps.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxb4qkbhf"/><path clip-rule="evenodd" class="ivphhvj4r"/><path class="p4rsgjvps"/>`,
		"fallback": "qlementine-icons:jack-locked-16",
	});
}

export default Component;
