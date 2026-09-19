import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imh05hb6a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="imh05hb6a"/>`,
		"fallback": "gravity-ui:key",
	});
}

export default Component;
