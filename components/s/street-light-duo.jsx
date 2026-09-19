import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qas215fks.css';
import '../../css/u/udz-msioc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qas215fks"/><path class="udz-msioc"/></g>`,
		"fallback": "glyphs:street-light-duo",
	});
}

export default Component;
