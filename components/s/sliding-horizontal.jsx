import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/y/ys6av9uap.css';
import '../../css/d/dbq7t-bba.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="ys6av9uap"/><path class="dbq7t-bba"/></g>`,
		"fallback": "icon-park:sliding-horizontal",
	});
}

export default Component;
