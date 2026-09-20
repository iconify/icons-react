import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_fc6-a4w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c_fc6-a4w"/>`,
		"fallback": "streamline:round-cap-solid",
	});
}

export default Component;
