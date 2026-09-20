import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvke21biv.css';
import '../../css/y/y__gdjb1a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvke21biv"/><path class="y__gdjb1a"/>`,
		"fallback": "vaadin:share-square",
	});
}

export default Component;
