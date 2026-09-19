import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_6s-6bft.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_6s-6bft"/>`,
		"fallback": "file-icons:ionic-project",
	});
}

export default Component;
