import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gev4v268m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gev4v268m"/>`,
		"fallback": "streamline-flex:module-puzzle-2-remix",
	});
}

export default Component;
