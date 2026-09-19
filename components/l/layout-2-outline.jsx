import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pz2uyujao.css';
import '../../css/f/fj61g7l0m.css';
import '../../css/e/el7ev0b3z.css';
import '../../css/m/m_1h3hg9s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pz2uyujao"/><path clip-rule="evenodd" class="fj61g7l0m"/><path class="el7ev0b3z"/><path clip-rule="evenodd" class="m_1h3hg9s"/></g>`,
		"fallback": "glyphs:layout-2-outline",
	});
}

export default Component;
