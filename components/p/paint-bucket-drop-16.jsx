import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag4uoqbgl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ag4uoqbgl"/>`,
		"fallback": "qlementine-icons:paint-bucket-drop-16",
	});
}

export default Component;
