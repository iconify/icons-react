import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n30oucg3z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n30oucg3z"/>`,
		"fallback": "streamline:interface-delete-bin-3-remove-delete-empty-bin-trash-garbage",
	});
}

export default Component;
