import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k23_kvbcb.css';
import '../../css/b/b22tnbb6v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k23_kvbcb"/><path class="b22tnbb6v"/>`,
		"fallback": "energy-icons:paper-mill-48",
	});
}

export default Component;
