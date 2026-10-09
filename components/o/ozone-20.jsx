import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czd4skyyb.css';
import '../../css/c/cs8zgvbmz.css';
import '../../css/z/ziak3vd1i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czd4skyyb"/><path class="cs8zgvbmz"/><path class="ziak3vd1i"/>`,
		"fallback": "energy-icons:ozone-20",
	});
}

export default Component;
