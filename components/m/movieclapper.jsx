import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bthpj2-gq.css';

const viewBox = {"width":1026,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bthpj2-gq"/>`,
		"fallback": "whh:movieclapper",
	});
}

export default Component;
