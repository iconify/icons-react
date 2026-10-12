import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umhq261qv.css';
import '../../css/j/jfwt8nbsc.css';
import '../../css/q/qmgqeka6o.css';
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
		"content": `<path class="umhq261qv"/><path class="jfwt8nbsc"/><path class="qmgqeka6o"/><path class="l9jgh7bvz"/><path class="st45emjbc"/>`,
		"fallback": "energy-icons:key-plus-48-bold",
	});
}

export default Component;
