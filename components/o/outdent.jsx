import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0lgx_3bc.css';
import '../../css/d/dh1xuibar.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0lgx_3bc"/><path clip-rule="evenodd" class="dh1xuibar"/>`,
		"fallback": "lineicons:outdent",
	});
}

export default Component;
