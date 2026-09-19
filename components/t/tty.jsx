import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmytx5v5d.css';

const viewBox = {"width":1792,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmytx5v5d"/>`,
		"fallback": "fa:tty",
	});
}

export default Component;
