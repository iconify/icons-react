import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0r6105yq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0r6105yq"/>`,
		"fallback": "pinhead:pill-bottle-with-greek-cross",
	});
}

export default Component;
