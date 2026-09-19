import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t10n-ib6l.css';
import '../../css/g/grr177h2m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t10n-ib6l"/><path class="grr177h2m"/></g>`,
		"fallback": "glyphs:spinner-2-duo",
	});
}

export default Component;
