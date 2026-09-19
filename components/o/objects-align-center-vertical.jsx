import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/buugc9b2j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="buugc9b2j"/>`,
		"fallback": "gravity-ui:objects-align-center-vertical",
	});
}

export default Component;
