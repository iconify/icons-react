import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u13qa-evs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u13qa-evs"/>`,
		"fallback": "gravity-ui:signal",
	});
}

export default Component;
