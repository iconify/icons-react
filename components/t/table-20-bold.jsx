import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i48le1b7u.css';
import '../../css/w/wx0wzhb6i.css';
import '../../css/a/amp8719fc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i48le1b7u"/><path class="wx0wzhb6i"/><path class="amp8719fc"/>`,
		"fallback": "energy-icons:table-20-bold",
	});
}

export default Component;
