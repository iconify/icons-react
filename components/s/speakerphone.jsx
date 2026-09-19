import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6v5jeb-g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t6v5jeb-g"/>`,
		"fallback": "heroicons-solid:speakerphone",
	});
}

export default Component;
