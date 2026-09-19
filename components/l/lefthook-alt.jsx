import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbf3x-bvc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbf3x-bvc"/>`,
		"fallback": "file-icons:lefthook-alt",
	});
}

export default Component;
