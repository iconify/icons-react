import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/q/q2qqhyzxr.css';
import '../../css/c/cz-xh6lnw.css';
import '../../css/b/brj-e3b6d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="q2qqhyzxr"/><path class="cz-xh6lnw"/><path class="brj-e3b6d"/></g>`,
		"fallback": "icon-park-outline:lip-gloss",
	});
}

export default Component;
