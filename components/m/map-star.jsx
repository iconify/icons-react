import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8fiu01er.css';
import '../../css/x/xpeiq2kly.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8fiu01er"/><path class="xpeiq2kly"/>`,
		"fallback": "gis:map-star",
	});
}

export default Component;
