import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/taq8lbfgt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="taq8lbfgt"/>`,
		"fallback": "carbon:sankey-diagram-alt",
	});
}

export default Component;
