import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/z/zrh8fhqbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="shu3xdl9q"/><path class="zrh8fhqbx"/></g>`,
		"fallback": "hugeicons:spotify",
	});
}

export default Component;
