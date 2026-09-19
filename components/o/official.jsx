import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btibzlb2t.css';

const viewBox = {"width":352,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btibzlb2t"/>`,
		"fallback": "ps:official",
	});
}

export default Component;
