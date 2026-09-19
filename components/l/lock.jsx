import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phsvk3hda.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phsvk3hda"/>`,
		"fallback": "fa7-solid:lock",
	});
}

export default Component;
