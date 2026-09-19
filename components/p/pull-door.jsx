import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/g/gbwgqsbsu.css';
import '../../css/n/nw7f38p0f.css';
import '../../css/d/dq9l1yu4e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="gbwgqsbsu"/><path class="nw7f38p0f"/><path class="dq9l1yu4e"/></g>`,
		"fallback": "icon-park:pull-door",
	});
}

export default Component;
