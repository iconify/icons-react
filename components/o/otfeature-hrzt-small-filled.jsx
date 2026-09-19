import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4v-gabjg.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4v-gabjg"/>`,
		"fallback": "dinkie-icons:otfeature-hrzt-small-filled",
	});
}

export default Component;
