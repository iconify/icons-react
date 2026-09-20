import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bah20gb6v.css';

const viewBox = {"width":192,"height":192};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bah20gb6v x19hqcy"/>`,
		"fallback": "thesvg-color:threads-light",
	});
}

export default Component;
