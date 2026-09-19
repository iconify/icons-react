import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgs3vg2ku.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vgs3vg2ku"/>`,
		"fallback": "gravity-ui:objects-align-justify-vertical",
	});
}

export default Component;
