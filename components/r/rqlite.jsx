import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3r9tub9u.css';
import '../../css/k/k78qywbzi.css';
import '../../css/d/dp-xfwbez.css';
import '../../css/d/dh01pubcj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3r9tub9u"/><path class="k78qywbzi"/><path class="dp-xfwbez"/><path class="dh01pubcj"/>`,
		"fallback": "devicon:rqlite",
	});
}

export default Component;
