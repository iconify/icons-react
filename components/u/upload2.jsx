import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqyxfs48f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqyxfs48f"/>`,
		"fallback": "icomoon-free:upload2",
	});
}

export default Component;
