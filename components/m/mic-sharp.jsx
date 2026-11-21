import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxqbwqxaq.css';
import '../../css/a/a-5p04cix.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxqbwqxaq"/><path class="a-5p04cix"/>`,
		"fallback": "ion:mic-sharp",
	});
}

export default Component;
