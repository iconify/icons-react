import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0v3hv2qo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x0v3hv2qo"/>`,
		"fallback": "streamline-flex:music-equalizer-remix",
	});
}

export default Component;
