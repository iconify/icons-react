import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urgyh8mug.css';
import '../../css/g/gx_3x244w.css';
import '../../css/y/y4nqx7dgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urgyh8mug"/><path class="gx_3x244w"/><path class="y4nqx7dgl"/>`,
		"fallback": "token:spank",
	});
}

export default Component;
