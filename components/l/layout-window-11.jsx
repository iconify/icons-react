import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpz2ktj_f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpz2ktj_f"/>`,
		"fallback": "streamline:layout-window-11",
	});
}

export default Component;
