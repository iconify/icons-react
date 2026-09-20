import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8oeb6bld.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8oeb6bld"/>`,
		"fallback": "pinhead:person-sitting-on-bench",
	});
}

export default Component;
