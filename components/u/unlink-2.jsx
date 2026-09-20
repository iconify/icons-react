import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-51v_02i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-51v_02i"/>`,
		"fallback": "lucide:unlink-2",
	});
}

export default Component;
