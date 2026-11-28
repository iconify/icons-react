import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sttrdl2yq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sttrdl2yq"/>`,
		"fallback": "noviair:pencil",
	});
}

export default Component;
