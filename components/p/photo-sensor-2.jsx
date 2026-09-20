import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpz2yhb6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpz2yhb6r"/>`,
		"fallback": "tabler:photo-sensor-2",
	});
}

export default Component;
