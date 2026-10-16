import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuoebqbes.css';
import '../../css/u/uuwv95n6f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuoebqbes"/><path class="uuwv95n6f"/>`,
		"fallback": "energy-icons:seed-20",
	});
}

export default Component;
