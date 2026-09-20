import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb0zw44vz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gb0zw44vz"/>`,
		"fallback": "streamline-flex:key-frame-remix",
	});
}

export default Component;
