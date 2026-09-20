import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqx3m-pme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bqx3m-pme"/>`,
		"fallback": "reicon:list-arrow-up-filled",
	});
}

export default Component;
