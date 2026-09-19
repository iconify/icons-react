import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/odcwkzu6r.css';
import '../../css/o/ogasd1kpl.css';
import '../../css/a/aldr43bry.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="odcwkzu6r"/><path class="ogasd1kpl"/><path class="aldr43bry"/></g>`,
		"fallback": "glyphs:subtract-duo",
	});
}

export default Component;
