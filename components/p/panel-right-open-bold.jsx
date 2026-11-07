import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7y90fksk.css';
import '../../css/d/dkbffkbiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r7y90fksk"/><path class="dkbffkbiu"/>`,
		"fallback": "solar:panel-right-open-bold",
	});
}

export default Component;
