import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/saz8lgmuq.css';
import '../../css/p/pb0vhv85n.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="saz8lgmuq"/><path class="pb0vhv85n"/>`,
		"fallback": "iwwa:settings",
	});
}

export default Component;
