import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e727a1bty.css';
import '../../css/r/r98qut7eh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e727a1bty"/><path class="r98qut7eh"/>`,
		"fallback": "vaadin:padding-top",
	});
}

export default Component;
