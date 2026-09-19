import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9_p7v3fq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9_p7v3fq"/>`,
		"fallback": "carbon:scan-alt",
	});
}

export default Component;
