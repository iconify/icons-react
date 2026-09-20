import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6u3acbyv.css';
import '../../css/d/d3a2v_bou.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6u3acbyv"/><path class="d3a2v_bou"/>`,
		"fallback": "vaadin:password",
	});
}

export default Component;
