import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdgsixb7a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdgsixb7a"/>`,
		"fallback": "teenyicons:simohamed-outline",
	});
}

export default Component;
