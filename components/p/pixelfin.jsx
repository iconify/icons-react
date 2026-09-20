import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t76ezw5zz.css';
import '../../css/v/vah_3dbqa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t76ezw5zz"/><path class="vah_3dbqa"/>`,
		"fallback": "selfhst:pixelfin",
	});
}

export default Component;
