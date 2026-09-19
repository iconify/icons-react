import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv3y6zk0g.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv3y6zk0g"/>`,
		"fallback": "fluent-mdl2:unlock-solid",
	});
}

export default Component;
