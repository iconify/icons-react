import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owx5tpc2l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owx5tpc2l"/>`,
		"fallback": "entypo-social:qq-with-circle",
	});
}

export default Component;
