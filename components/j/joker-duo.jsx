import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i7z2n2wtr.css';
import '../../css/d/dznf5ccgt.css';
import '../../css/x/xerbc4b9w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i7z2n2wtr"/><path class="dznf5ccgt"/><path class="xerbc4b9w"/></g>`,
		"fallback": "glyphs:joker-duo",
	});
}

export default Component;
