import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajasrw1yc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ajasrw1yc"/>`,
		"fallback": "mingcute:vector-bezier-2-fill",
	});
}

export default Component;
