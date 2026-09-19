import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt_yvmwhr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt_yvmwhr"/>`,
		"fallback": "entypo-social:renren",
	});
}

export default Component;
