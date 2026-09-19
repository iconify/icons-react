import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8kpsnbql.css';
import '../../css/j/jy6v7eb4r.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/f0tc49j9c.css';
import '../../css/g/gwyt20tco.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGggBtugIQ"><path class="p8kpsnbql"/></clipPath><clipPath id="SVGIm7SndZc"><path class="jy6v7eb4r"/></clipPath></defs><g clip-path="url(#SVGIm7SndZc)"><g clip-path="url(#SVGggBtugIQ)" transform="translate(0 16)"><g class="d2kvgvbvc"><path class="f0tc49j9c"/><path class="gwyt20tco"/></g></g></g>`,
		"fallback": "flag:np-1x1",
	});
}

export default Component;
