import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b0lqkvb9p.css';
import '../../css/g/g8ko324ru.css';
import '../../css/e/eszrb1bhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="b0lqkvb9p"/><path class="g8ko324ru"/><path class="eszrb1bhz"/></g>`,
		"fallback": "solar:quote-square-outline",
	});
}

export default Component;
