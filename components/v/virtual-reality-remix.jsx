import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bujsw6-zc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bujsw6-zc"/>`,
		"fallback": "streamline:virtual-reality-remix",
	});
}

export default Component;
