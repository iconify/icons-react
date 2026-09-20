import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7to8vrmi.css';
import '../../css/r/r49wnackk.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a7to8vrmi"/><path class="r49wnackk"/>`,
		"fallback": "lineicons:page-break-1",
	});
}

export default Component;
