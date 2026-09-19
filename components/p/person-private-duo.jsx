import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-0g1u_cj.css';
import '../../css/c/cvick3n-n.css';
import '../../css/m/ms9oq5b1y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y-0g1u_cj"/><path class="cvick3n-n"/><path class="ms9oq5b1y"/></g>`,
		"fallback": "glyphs:person-private-duo",
	});
}

export default Component;
