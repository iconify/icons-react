import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_vn9-b7l.css';
import '../../css/k/kj4xs5bkc.css';
import '../../css/g/gxky-sbxf.css';
import '../../css/o/o3qyi4q4j.css';
import '../../css/y/yxo0c53uh.css';
import '../../css/b/bg7ycfomi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_vn9-b7l"/><path class="kj4xs5bkc"/><path class="gxky-sbxf"/><path class="o3qyi4q4j"/><path class="yxo0c53uh"/><path class="bg7ycfomi"/>`,
		"fallback": "energy-icons:thermostat-x-20",
	});
}

export default Component;
