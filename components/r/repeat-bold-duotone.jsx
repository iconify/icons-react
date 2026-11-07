import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6iijhcww.css';
import '../../css/x/xq74wrb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g6iijhcww"/><path class="xq74wrb0y"/>`,
		"fallback": "solar:repeat-bold-duotone",
	});
}

export default Component;
