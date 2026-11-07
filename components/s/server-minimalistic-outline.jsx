import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svqnb4b4e.css';
import '../../css/u/us2chjbxo.css';
import '../../css/y/yxw2mbcmw.css';
import '../../css/j/jfhx-4j7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="svqnb4b4e"/><path class="us2chjbxo"/><path class="yxw2mbcmw"/><path class="jfhx-4j7u"/>`,
		"fallback": "solar:server-minimalistic-outline",
	});
}

export default Component;
