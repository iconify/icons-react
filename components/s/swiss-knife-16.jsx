import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h29-mkxmi.css';
import '../../css/d/d4ur63wtm.css';
import '../../css/i/ih216efdz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h29-mkxmi"/><path clip-rule="evenodd" class="d4ur63wtm"/><path class="ih216efdz"/>`,
		"fallback": "qlementine-icons:swiss-knife-16",
	});
}

export default Component;
