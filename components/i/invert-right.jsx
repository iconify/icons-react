import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/o8012kb1g.css';
import '../../css/h/hnvgdj38u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="o8012kb1g"/><path class="hnvgdj38u"/></g>`,
		"fallback": "icon-park-outline:invert-right",
	});
}

export default Component;
