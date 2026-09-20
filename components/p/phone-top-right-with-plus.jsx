import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4es6rmzg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4es6rmzg"/>`,
		"fallback": "pinhead:phone-top-right-with-plus",
	});
}

export default Component;
