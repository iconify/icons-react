import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbryi_wln.css';
import '../../css/a/a897-ob1z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbryi_wln"/><path class="a897-ob1z"/>`,
		"fallback": "energy-icons:pill-20",
	});
}

export default Component;
