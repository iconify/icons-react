import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4vm18b5j.css';
import '../../css/b/bosvvnbsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4vm18b5j"/><path clip-rule="evenodd" class="bosvvnbsn"/>`,
		"fallback": "token:key",
	});
}

export default Component;
