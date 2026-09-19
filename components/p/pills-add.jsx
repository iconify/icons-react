import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/maueyoblv.css';
import '../../css/y/ymcl-hbcy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="maueyoblv"/><path class="ymcl-hbcy"/>`,
		"fallback": "carbon:pills-add",
	});
}

export default Component;
