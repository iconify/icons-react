import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2bc8ac_f.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ti114kbus.css';
import '../../css/m/m1f3-xb3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGA9GA4JbJ" width="22" height="22" x="1" y="1" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path class="s2bc8ac_f"/></mask><g mask="url(#SVGA9GA4JbJ)" class="ft5dv1b6b"><path class="ti114kbus"/><path class="m1f3-xb3z"/></g>`,
		"fallback": "streamline-ultimate-color:text-underline",
	});
}

export default Component;
