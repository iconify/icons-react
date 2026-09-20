import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvt-im0fk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvt-im0fk"/>`,
		"fallback": "si:quote-line",
	});
}

export default Component;
