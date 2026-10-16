import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5dhy6b4r.css';
import '../../css/o/o0s_5jy_f.css';
import '../../css/f/fn5st7b7q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5dhy6b4r"/><path class="o0s_5jy_f"/><path class="fn5st7b7q"/>`,
		"fallback": "energy-icons:oil-tanker-20-bold",
	});
}

export default Component;
