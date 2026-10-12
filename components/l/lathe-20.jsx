import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur3m-8djy.css';
import '../../css/u/uvv6a-b1c.css';
import '../../css/u/ul72h2brt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur3m-8djy"/><path class="uvv6a-b1c"/><path class="ul72h2brt"/>`,
		"fallback": "energy-icons:lathe-20",
	});
}

export default Component;
