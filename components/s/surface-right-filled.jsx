import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg5zuubla.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hg5zuubla"/>`,
		"fallback": "lsicon:surface-right-filled",
	});
}

export default Component;
