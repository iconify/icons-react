import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/u4q198b1c.css';
import '../../css/j/j29kkdbvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="u4q198b1c"/><path class="j29kkdbvw"/></g>`,
		"fallback": "withicons-bauhaus:sort-alpha",
	});
}

export default Component;
