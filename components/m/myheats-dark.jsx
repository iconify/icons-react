import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhfnc2dzw.css';
import '../../css/c/ccz24ggpe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhfnc2dzw"/><path class="ccz24ggpe"/>`,
		"fallback": "selfhst:myheats-dark",
	});
}

export default Component;
