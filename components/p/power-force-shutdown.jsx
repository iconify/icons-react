import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjcmjo8jw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjcmjo8jw"/>`,
		"fallback": "grommet-icons:power-force-shutdown",
	});
}

export default Component;
