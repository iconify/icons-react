import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/paoz3oiaw.css';
import '../../css/u/ujzlw64ng.css';
import '../../css/i/ig49w4b5i.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-path="url(#SVGtj1Wf5yD)" class="ft5dv1b6b"><mask id="SVGtj1Wf5yD" width="256" height="256" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path class="paoz3oiaw"/></mask><g mask="url(#SVGtj1Wf5yD)"><path class="ujzlw64ng"/><path class="ig49w4b5i"/></g></g>`,
		"fallback": "thesvg-color:vk",
	});
}

export default Component;
