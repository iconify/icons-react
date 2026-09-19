import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6z-3iz4b.css';
import '../../css/w/wpuyqmbtu.css';
import '../../css/l/ln93sbcwe.css';

const viewBox = {"width":7,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="m6z-3iz4b"/><circle class="wpuyqmbtu"/><circle class="ln93sbcwe"/>`,
		"fallback": "formkit:reorder",
	});
}

export default Component;
