import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/snvfagbiz.css';
import '../../css/v/vc4o8acyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="snvfagbiz"/><path class="vc4o8acyj"/></g>`,
		"fallback": "tdesign:sound-mute",
	});
}

export default Component;
