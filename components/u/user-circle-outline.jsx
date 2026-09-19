import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t89f95b8p.css';
import '../../css/b/bsnrj6lbv.css';
import '../../css/i/ivdx5lb0c.css';
import '../../css/l/lc2yt8urn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="t89f95b8p"/><path class="bsnrj6lbv"/><path class="ivdx5lb0c"/><path class="lc2yt8urn"/></g>`,
		"fallback": "glyphs:user-circle-outline",
	});
}

export default Component;
