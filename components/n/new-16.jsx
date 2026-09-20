import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kic12wbzz.css';
import '../../css/h/hm17yp49j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kic12wbzz"/><path clip-rule="evenodd" class="hm17yp49j"/>`,
		"fallback": "qlementine-icons:new-16",
	});
}

export default Component;
