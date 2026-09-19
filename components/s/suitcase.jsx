import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmztj_bwu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmztj_bwu"/>`,
		"fallback": "entypo:suitcase",
	});
}

export default Component;
