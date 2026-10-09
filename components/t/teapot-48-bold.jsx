import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xeyh_rdcv.css';
import '../../css/m/mz5l_db3r.css';
import '../../css/c/c5154m1sd.css';
import '../../css/y/yno-x3bbw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xeyh_rdcv"/><path class="mz5l_db3r"/><path class="c5154m1sd"/><path class="yno-x3bbw"/>`,
		"fallback": "energy-icons:teapot-48-bold",
	});
}

export default Component;
