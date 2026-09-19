import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5mm9zbyw.css';
import '../../css/p/phow5bc9n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5mm9zbyw"/><path class="phow5bc9n"/>`,
		"fallback": "carbon:settings",
	});
}

export default Component;
