import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owj3ghg8i.css';
import '../../css/c/c974m8b_r.css';
import '../../css/k/kigmuob9w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owj3ghg8i"/><path class="c974m8b_r"/><path class="kigmuob9w"/>`,
		"fallback": "streamline-pixel:internet-network-laptop",
	});
}

export default Component;
