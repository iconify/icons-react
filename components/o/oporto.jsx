import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm9yzobix.css';
import '../../css/n/n8hq-bb-h.css';
import '../../css/m/mdoa6mb-r.css';
import '../../css/a/atc9tum9k.css';
import '../../css/q/q5-mclb4w.css';

const viewBox = {"width":35.402,"height":11.519};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wm9yzobix"><path class="n8hq-bb-h"/><path class="mdoa6mb-r"/><path class="atc9tum9k"/><path class="q5-mclb4w"/></g>`,
		"fallback": "thesvg-color:oporto",
	});
}

export default Component;
