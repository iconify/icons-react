import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gouxmnbpb.css';
import '../../css/k/kqpq3jb5r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gouxmnbpb"/><path class="kqpq3jb5r"/>`,
		"fallback": "streamline-pixel:interface-essential-floppy-disk",
	});
}

export default Component;
