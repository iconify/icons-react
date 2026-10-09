import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec5zy9y1r.css';
import '../../css/l/l427qbccv.css';
import '../../css/v/vatnkib2t.css';
import '../../css/x/xhp71gb7v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec5zy9y1r"/><path class="l427qbccv"/><path class="vatnkib2t"/><path class="xhp71gb7v"/>`,
		"fallback": "energy-icons:oil-rig-20",
	});
}

export default Component;
