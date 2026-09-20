import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg1xs5bde.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg1xs5bde"/>`,
		"fallback": "nimbus:vertical-stacks",
	});
}

export default Component;
