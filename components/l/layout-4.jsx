import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2-2p5bfw.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2-2p5bfw"/>`,
		"fallback": "si-glyph:layout-4",
	});
}

export default Component;
