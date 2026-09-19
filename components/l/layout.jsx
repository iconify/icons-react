import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fic-uk24y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fic-uk24y"/>`,
		"fallback": "codicon:layout",
	});
}

export default Component;
