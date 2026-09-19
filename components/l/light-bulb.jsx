import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uayh04bgf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uayh04bgf"/>`,
		"fallback": "entypo:light-bulb",
	});
}

export default Component;
