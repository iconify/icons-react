import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm5jskbtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zm5jskbtx"/>`,
		"fallback": "streamline-sharp:passport-globe-remix",
	});
}

export default Component;
