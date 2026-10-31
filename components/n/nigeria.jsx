import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl8-tdb0a.css';
import '../../css/l/l9cl-boot.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tl8-tdb0a"/><path class="l9cl-boot"/>`,
		"fallback": "tabler-flags:nigeria",
	});
}

export default Component;
