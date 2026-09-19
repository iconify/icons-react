import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkz3kr8cu.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkz3kr8cu"/>`,
		"fallback": "ant-design:sisternode",
	});
}

export default Component;
