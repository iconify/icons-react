import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg_756b_n.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hg_756b_n"/>`,
		"fallback": "picon:walk",
	});
}

export default Component;
