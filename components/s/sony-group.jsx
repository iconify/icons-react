import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyuwmlbix.css';

const viewBox = {"width":263.352,"height":46.74};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyuwmlbix"/>`,
		"fallback": "thesvg-color:sony-group",
	});
}

export default Component;
