import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6kb-tklu.css';
import '../../css/s/s6r4foaoj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6kb-tklu"/><path class="s6r4foaoj"/>`,
		"fallback": "carbon:launch",
	});
}

export default Component;
