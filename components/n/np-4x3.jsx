import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8kpsnbql.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/li0ifseah.css';
import '../../css/g/gwyt20tco.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGggBtugIQ"><path class="p8kpsnbql"/></clipPath></defs><g clip-path="url(#SVGggBtugIQ)" transform="translate(0 15)scale(.9375)"><g class="d2kvgvbvc"><path class="li0ifseah"/><path class="gwyt20tco"/></g></g>`,
		"fallback": "flag:np-4x3",
	});
}

export default Component;
