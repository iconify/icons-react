import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s6r_4vb3z.css';
import '../../css/c/cw47yzbif.css';
import '../../css/n/nm2wr6boy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s6r_4vb3z"/><path class="cw47yzbif"/><path class="nm2wr6boy"/></g>`,
		"fallback": "glyphs:rain-1-duo",
	});
}

export default Component;
