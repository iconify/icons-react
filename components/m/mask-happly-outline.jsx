import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ui57otb5r.css';
import '../../css/d/dpovio02y.css';
import '../../css/u/uaipmab5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ui57otb5r"/><path clip-rule="evenodd" class="dpovio02y"/><path class="uaipmab5j"/>`,
		"fallback": "solar:mask-happly-outline",
	});
}

export default Component;
