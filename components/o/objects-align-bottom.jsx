import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrq4uvh_x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wrq4uvh_x"/>`,
		"fallback": "gravity-ui:objects-align-bottom",
	});
}

export default Component;
