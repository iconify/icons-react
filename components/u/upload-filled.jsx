import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pla5l_p9w.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pla5l_p9w"/>`,
		"fallback": "ep:upload-filled",
	});
}

export default Component;
