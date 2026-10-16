import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xf5oxvb8k.css';
import '../../css/z/zjz25chpg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xf5oxvb8k"/><path class="zjz25chpg"/>`,
		"fallback": "energy-icons:phone-missed-20",
	});
}

export default Component;
