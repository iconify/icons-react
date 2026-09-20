import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p49jc6i4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p49jc6i4w"/>`,
		"fallback": "thesvg:loom",
	});
}

export default Component;
