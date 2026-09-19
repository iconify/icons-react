import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4bw4gbbn.css';
import '../../css/c/czndeu-mt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4bw4gbbn"/><path class="czndeu-mt"/>`,
		"fallback": "famicons:magnet",
	});
}

export default Component;
