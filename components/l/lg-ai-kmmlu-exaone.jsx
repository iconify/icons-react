import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udcb4db1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udcb4db1i"/>`,
		"fallback": "thesvg:lg-ai-kmmlu-exaone",
	});
}

export default Component;
