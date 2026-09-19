import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/od2shit8j.css';
import '../../css/h/h_flpcrho.css';
import '../../css/c/cm0a-46ib.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="od2shit8j"/><path class="h_flpcrho"/><path class="cm0a-46ib"/></g>`,
		"fallback": "glyphs:user-circle-duo",
	});
}

export default Component;
