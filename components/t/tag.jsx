import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bob09ob5f.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bob09ob5f"/>`,
		"fallback": "websymbol:tag",
	});
}

export default Component;
