import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nzbg1sbtp.css';
import '../../css/i/i1pf97t2i.css';
import '../../css/l/li3w9mbon.css';
import '../../css/w/w0p4f5bye.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nzbg1sbtp"/><path class="i1pf97t2i"/><path class="li3w9mbon"/><path class="w0p4f5bye"/></g>`,
		"fallback": "glyphs:tag-duo",
	});
}

export default Component;
