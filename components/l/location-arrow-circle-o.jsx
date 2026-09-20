import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j51w7z-wj.css';
import '../../css/q/qg43yj1um.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j51w7z-wj"/><path class="qg43yj1um"/>`,
		"fallback": "vaadin:location-arrow-circle-o",
	});
}

export default Component;
