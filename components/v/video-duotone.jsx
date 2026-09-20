import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o74lg6b1j.css';
import '../../css/y/yfj7mgfcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o74lg6b1j"/><path class="yfj7mgfcc"/></g>`,
		"fallback": "si:video-duotone",
	});
}

export default Component;
