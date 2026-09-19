import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huf-eeblg.css';
import '../../css/a/arr-9f6dm.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="huf-eeblg"/><path class="arr-9f6dm"/>`,
		"fallback": "foundation:minus-circle",
	});
}

export default Component;
