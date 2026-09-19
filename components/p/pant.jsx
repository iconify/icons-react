import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czvroobwh.css';

const viewBox = {"width":304,"height":520};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czvroobwh"/>`,
		"fallback": "ps:pant",
	});
}

export default Component;
