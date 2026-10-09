import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmf8y5bqk.css';
import '../../css/w/wt80nmbhx.css';
import '../../css/s/sfceoobcy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmf8y5bqk"/><path class="wt80nmbhx"/><path class="sfceoobcy"/>`,
		"fallback": "energy-icons:warehouse-20",
	});
}

export default Component;
