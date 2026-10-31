import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-7cfrboh.css';
import '../../css/c/crmp7vbgk.css';
import '../../css/h/hn8ri-1yp.css';
import '../../css/v/vtkwp995o.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-7cfrboh"/><path class="crmp7vbgk"/><path class="hn8ri-1yp"/><path class="vtkwp995o"/>`,
		"fallback": "tabler-flags:myanmar",
	});
}

export default Component;
