import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmpytpb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmpytpb4a"/>`,
		"fallback": "noviair:leaf",
	});
}

export default Component;
