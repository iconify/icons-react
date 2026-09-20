import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qg80xcbze.css';
import '../../css/w/wsvpupbfs.css';
import '../../css/j/jwn5amcvm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qg80xcbze"/><path class="wsvpupbfs"/><path class="jwn5amcvm"/></g>`,
		"fallback": "streamline-flex-color:magnifying-glass",
	});
}

export default Component;
