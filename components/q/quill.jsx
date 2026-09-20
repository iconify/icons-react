import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b5_0htkle.css';
import '../../css/t/tziy3hnco.css';
import '../../css/u/u948b0wgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b5_0htkle"/><path class="tziy3hnco"/><path class="u948b0wgl"/></g>`,
		"fallback": "streamline-cyber-color:quill",
	});
}

export default Component;
