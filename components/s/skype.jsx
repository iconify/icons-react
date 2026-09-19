import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w758uv4jk.css';
import '../../css/t/t5r-27-dp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w758uv4jk"/><path class="t5r-27-dp"/>`,
		"fallback": "icomoon-free:skype",
	});
}

export default Component;
