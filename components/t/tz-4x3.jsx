import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1iprnb1m.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/r/rzawb6dph.css';
import '../../css/o/o3izgz30p.css';
import '../../css/f/f-5688buf.css';
import '../../css/x/x91kkibeb.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGZoARhb6Q"><path class="f1iprnb1m"/></clipPath></defs><g clip-path="url(#SVGZoARhb6Q)" transform="matrix(4 0 0 4 -40 0)" class="nv9qcacyl"><path class="rzawb6dph"/><path class="o3izgz30p"/><path class="f-5688buf"/><path class="x91kkibeb"/></g>`,
		"fallback": "flag:tz-4x3",
	});
}

export default Component;
