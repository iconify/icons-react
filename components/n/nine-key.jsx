import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/b/b51-lhp3z.css';
import '../../css/s/se2qxethe.css';
import '../../css/g/gp4pu0sxh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><rect class="b51-lhp3z"/><path class="se2qxethe"/><path class="gp4pu0sxh"/></g>`,
		"fallback": "icon-park:nine-key",
	});
}

export default Component;
