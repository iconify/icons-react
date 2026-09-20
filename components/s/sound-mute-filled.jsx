import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d00see32g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d00see32g"/>`,
		"fallback": "ix:sound-mute-filled",
	});
}

export default Component;
