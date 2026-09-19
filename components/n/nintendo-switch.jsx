import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/c/cjphzrb1p.css';
import '../../css/w/w4ddqztbi.css';
import '../../css/u/u4y2khvej.css';
import '../../css/b/bbhk76y4q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="cjphzrb1p"/><path class="w4ddqztbi"/><path class="u4y2khvej"/><path class="bbhk76y4q"/></g>`,
		"fallback": "icon-park:nintendo-switch",
	});
}

export default Component;
