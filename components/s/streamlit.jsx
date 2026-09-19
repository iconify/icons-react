import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_je-3caz.css';
import '../../css/j/jmyvgu6pl.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_je-3caz"/><path class="jmyvgu6pl"/>`,
		"fallback": "devicon-plain:streamlit",
	});
}

export default Component;
