import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vskr90bqk.css';
import '../../css/k/kdjsh1b9r.css';
import '../../css/j/jlmj2df4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vskr90bqk"/><path class="kdjsh1b9r"/><path class="jlmj2df4o"/>`,
		"fallback": "solar:skateboard-bold",
	});
}

export default Component;
