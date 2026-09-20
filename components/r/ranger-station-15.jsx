import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk5u0i5pv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zk5u0i5pv"/>`,
		"fallback": "maki:ranger-station-15",
	});
}

export default Component;
