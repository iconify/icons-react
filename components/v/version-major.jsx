import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg1yxfb0n.css';
import '../../css/s/stheyzbwt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg1yxfb0n"/><path class="stheyzbwt"/>`,
		"fallback": "carbon:version-major",
	});
}

export default Component;
