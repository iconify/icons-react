import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9cl-boot.css';
import '../../css/r/rltssxbuj.css';
import '../../css/g/g323dnkch.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9cl-boot"/><path class="rltssxbuj"/><path class="g323dnkch"/>`,
		"fallback": "tabler-flags:ireland",
	});
}

export default Component;
