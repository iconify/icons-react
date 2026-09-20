import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vun63ebyc.css';
import '../../css/x/xen266bam.css';
import '../../css/x/xqf_2yb8a.css';
import '../../css/g/gxu01hd-s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGVKMUzeSb" x1="27.349" x2="7.613" y1="26.455" y2="6.719" gradientTransform="matrix(1 0 0 -1 0 34)" gradientUnits="userSpaceOnUse"><stop offset=".15" class="vun63ebyc"/><stop offset=".85" class="xen266bam"/></linearGradient></defs><path class="xqf_2yb8a"/><path fill="url(#SVGVKMUzeSb)" class="gxu01hd-s"/>`,
		"fallback": "material-icon-theme:turborepo-light",
	});
}

export default Component;
