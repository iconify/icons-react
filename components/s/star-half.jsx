import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_h2tywfe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_h2tywfe"/>`,
		"fallback": "icomoon-free:star-half",
	});
}

export default Component;
