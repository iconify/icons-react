import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rgrhs7gql.css';
import '../../css/n/n7kb9ccjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rgrhs7gql"/><path class="n7kb9ccjj"/></g>`,
		"fallback": "tdesign:map-outline",
	});
}

export default Component;
