import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/maueyoblv.css';
import '../../css/l/lk5_xc46y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="maueyoblv"/><path class="lk5_xc46y"/>`,
		"fallback": "carbon:pills-subtract",
	});
}

export default Component;
