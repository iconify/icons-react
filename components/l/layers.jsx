import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-dmpsp-p.css';
import '../../css/e/eeukgofxq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-dmpsp-p"/><path class="eeukgofxq"/>`,
		"fallback": "carbon:layers",
	});
}

export default Component;
