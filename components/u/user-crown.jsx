import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gifnzwbsx.css';
import '../../css/g/gsg7zl33p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gifnzwbsx"/><path class="gsg7zl33p"/></g>`,
		"fallback": "iconoir:user-crown",
	});
}

export default Component;
