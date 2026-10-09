import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbi25pb1n.css';
import '../../css/i/ijb4gt58w.css';
import '../../css/v/vbh2_55tf.css';
import '../../css/n/nt-jk7fef.css';
import '../../css/n/n6d0kus7v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbi25pb1n"/><path class="ijb4gt58w"/><path class="vbh2_55tf"/><path class="nt-jk7fef"/><path class="n6d0kus7v"/>`,
		"fallback": "energy-icons:methane-48",
	});
}

export default Component;
