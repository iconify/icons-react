import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/z/z_buddc8f.css';
import '../../css/l/l8fzhbbbw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="z_buddc8f"/><path class="l8fzhbbbw"/></g>`,
		"fallback": "streamline-plump:recycle-bin-2",
	});
}

export default Component;
