import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exa2uu4rz.css';
import '../../css/u/ur3_zfbct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exa2uu4rz"/><path clip-rule="evenodd" class="ur3_zfbct"/>`,
		"fallback": "solar:panel-top-open-outline",
	});
}

export default Component;
