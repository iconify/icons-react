import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p29vpb_np.css';
import '../../css/j/jp5u-n8ve.css';
import '../../css/l/l8htvablp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p29vpb_np"/><path class="jp5u-n8ve"/><path class="l8htvablp"/>`,
		"fallback": "qlementine-icons:layout-pages-vertical-16",
	});
}

export default Component;
