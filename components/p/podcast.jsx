import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzwebw3gv.css';

const viewBox = {"width":20,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzwebw3gv"/>`,
		"fallback": "fontisto:podcast",
	});
}

export default Component;
