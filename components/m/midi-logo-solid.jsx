import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-y7qc5fv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z-y7qc5fv"/>`,
		"fallback": "streamline-logos:midi-logo-solid",
	});
}

export default Component;
