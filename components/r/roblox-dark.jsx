import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss-jg4l0d.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gkktj-s3r.css';

const viewBox = {"width":564,"height":115};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGVngcvcMx" width="512" height="95" x="26" y="10" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path class="ss-jg4l0d"/></mask><g mask="url(#SVGVngcvcMx)" class="ft5dv1b6b"><path class="gkktj-s3r"/></g>`,
		"fallback": "thesvg-color:roblox-dark",
	});
}

export default Component;
