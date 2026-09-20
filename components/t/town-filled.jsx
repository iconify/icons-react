import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3epa78jl.css';
import '../../css/b/b11srpowt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3epa78jl"/><path class="b11srpowt"/>`,
		"fallback": "tdesign:town-filled",
	});
}

export default Component;
