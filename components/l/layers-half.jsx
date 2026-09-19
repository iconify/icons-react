import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ui0kak2cb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ui0kak2cb"/>`,
		"fallback": "bi:layers-half",
	});
}

export default Component;
