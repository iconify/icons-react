import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alod_jbur.css';
import '../../css/j/jgg6r11_w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alod_jbur"/><path clip-rule="evenodd" class="jgg6r11_w"/>`,
		"fallback": "oui:token-keyword",
	});
}

export default Component;
