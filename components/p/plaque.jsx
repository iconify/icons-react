import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6tcecw7f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6tcecw7f"/>`,
		"fallback": "temaki:plaque",
	});
}

export default Component;
