import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5yiolbrq.css';
import '../../css/q/qsgv5bbpc.css';
import '../../css/z/zf9x55bcw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5yiolbrq"/><path class="qsgv5bbpc"/><path class="zf9x55bcw"/>`,
		"fallback": "energy-icons:layers-20-bold",
	});
}

export default Component;
