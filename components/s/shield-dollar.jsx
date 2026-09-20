import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsi7ipshf.css';
import '../../css/p/p3hf5o7_f.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsi7ipshf"/><path clip-rule="evenodd" class="p3hf5o7_f"/>`,
		"fallback": "lineicons:shield-dollar",
	});
}

export default Component;
