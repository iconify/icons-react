import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/banh9fb7p.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="banh9fb7p"/>`,
		"fallback": "picon:train",
	});
}

export default Component;
