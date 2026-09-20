import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sujsk-bgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sujsk-bgk"/>`,
		"fallback": "streamline-freehand:text-formating-arrange-spacing",
	});
}

export default Component;
