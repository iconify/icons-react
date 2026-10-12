import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqzqvbb7y.css';
import '../../css/a/a3evc_bbq.css';
import '../../css/u/unwdjw5xz.css';
import '../../css/x/x6wh33b7i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqzqvbb7y"/><path class="a3evc_bbq"/><path class="unwdjw5xz"/><path class="x6wh33b7i"/>`,
		"fallback": "energy-icons:roundabout-20",
	});
}

export default Component;
