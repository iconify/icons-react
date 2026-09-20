import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uome-0b3l.css';
import '../../css/g/g4a26gb0c.css';
import '../../css/p/pe71vincc.css';

const viewBox = {"width":1683.78,"height":1289.764};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uome-0b3l"/><path class="g4a26gb0c"/><path class="pe71vincc"/>`,
		"fallback": "thesvg-color:kfc-light",
	});
}

export default Component;
