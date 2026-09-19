import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctkupt07p.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctkupt07p"/>`,
		"fallback": "dinkie-icons:size-text-small-filled",
	});
}

export default Component;
