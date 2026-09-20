import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ui6pqfb0o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ui6pqfb0o"/>`,
		"fallback": "pinhead:pier-on-water",
	});
}

export default Component;
