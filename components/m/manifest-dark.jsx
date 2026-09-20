import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2xq-t_kz.css';
import '../../css/j/j51j01l3b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2xq-t_kz"/><path class="j51j01l3b"/>`,
		"fallback": "selfhst:manifest-dark",
	});
}

export default Component;
