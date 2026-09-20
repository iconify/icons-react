import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vspa-mbhv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vspa-mbhv"/>`,
		"fallback": "streamline:interface-arrows-vertical-expand-1-move-expand-vertical",
	});
}

export default Component;
