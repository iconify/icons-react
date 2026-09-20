import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unc2embyj.css';
import '../../css/j/j2l72bb1a.css';
import '../../css/k/kv5hm5h9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="unc2embyj"><path class="j2l72bb1a"/><path class="kv5hm5h9l"/></g>`,
		"fallback": "lets-icons:stop-and-play-duotone",
	});
}

export default Component;
