import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf-ml6e6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf-ml6e6r"/>`,
		"fallback": "simple-icons:tildapublishing",
	});
}

export default Component;
