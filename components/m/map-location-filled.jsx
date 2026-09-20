import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3i8uzbyg.css';
import '../../css/e/edwthhmnw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q3i8uzbyg"/><path class="edwthhmnw"/>`,
		"fallback": "lsicon:map-location-filled",
	});
}

export default Component;
