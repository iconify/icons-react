import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s12b9m4yl.css';
import '../../css/c/c-rl6lbfw.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s12b9m4yl"/><path clip-rule="evenodd" class="c-rl6lbfw"/>`,
		"fallback": "lineicons:upload-circle-1",
	});
}

export default Component;
