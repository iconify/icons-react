import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylh2tps0c.css';
import '../../css/a/a-5p04cix.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylh2tps0c"/><path class="a-5p04cix"/>`,
		"fallback": "famicons:mic-sharp",
	});
}

export default Component;
