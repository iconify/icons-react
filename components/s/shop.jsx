import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b5fzbzacp.css';
import '../../css/m/m1nd1sl7j.css';
import '../../css/u/ug4rnqbgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="b5fzbzacp"/><path class="m1nd1sl7j"/><path class="ug4rnqbgx"/></g>`,
		"fallback": "streamline-freehand:shop",
	});
}

export default Component;
