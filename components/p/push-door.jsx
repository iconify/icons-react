import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/b/bw27wgbqm.css';
import '../../css/c/cazmiub8o.css';
import '../../css/d/dq9l1yu4e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="bw27wgbqm"/><path class="cazmiub8o"/><path class="dq9l1yu4e"/></g>`,
		"fallback": "icon-park:push-door",
	});
}

export default Component;
