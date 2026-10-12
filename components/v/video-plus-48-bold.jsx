import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qihpiwb4n.css';
import '../../css/y/yxp0hz-2q.css';
import '../../css/l/l9jgh7bvz.css';
import '../../css/s/st45emjbc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qihpiwb4n"/><path class="yxp0hz-2q"/><path class="l9jgh7bvz"/><path class="st45emjbc"/>`,
		"fallback": "energy-icons:video-plus-48-bold",
	});
}

export default Component;
