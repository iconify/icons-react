import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukrge3umx.css';
import '../../css/a/aavhnbyqy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukrge3umx"/><path class="aavhnbyqy"/>`,
		"fallback": "energy-icons:shield-user-20",
	});
}

export default Component;
