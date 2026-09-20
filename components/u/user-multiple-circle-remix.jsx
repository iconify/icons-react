import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkzodjq2w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pkzodjq2w"/>`,
		"fallback": "streamline:user-multiple-circle-remix",
	});
}

export default Component;
