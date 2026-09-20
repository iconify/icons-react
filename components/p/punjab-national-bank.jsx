import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhg31ab6k.css';
import '../../css/g/g6amu9bqo.css';
import '../../css/t/til_4nbtz.css';
import '../../css/z/zy1595bom.css';

const viewBox = {"width":180.359,"height":35.355};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhg31ab6k"/><path class="g6amu9bqo"/><path class="til_4nbtz"/><path class="zy1595bom"/>`,
		"fallback": "thesvg-color:punjab-national-bank",
	});
}

export default Component;
