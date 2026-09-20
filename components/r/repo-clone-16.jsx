import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvtem461l.css';
import '../../css/t/tcz9p2b4h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvtem461l"/><path class="tcz9p2b4h"/>`,
		"fallback": "octicon:repo-clone-16",
	});
}

export default Component;
