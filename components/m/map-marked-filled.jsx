import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8vzjhb9f.css';
import '../../css/j/jmm-qubuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8vzjhb9f"/><path class="jmm-qubuq"/>`,
		"fallback": "tdesign:map-marked-filled",
	});
}

export default Component;
