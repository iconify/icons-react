import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gt7xk2esg.css';
import '../../css/a/ajw219bnd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gt7xk2esg"/><path class="ajw219bnd"/></g>`,
		"fallback": "glyphs:maple-leaf-duo",
	});
}

export default Component;
