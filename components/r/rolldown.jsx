import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8w67sbqg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8w67sbqg"/>`,
		"fallback": "material-icon-theme:rolldown",
	});
}

export default Component;
