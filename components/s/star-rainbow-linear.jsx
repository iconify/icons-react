import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/msixhxc0a.css';
import '../../css/u/upa9kfy6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="msixhxc0a"/><path class="upa9kfy6v"/></g>`,
		"fallback": "solar:star-rainbow-linear",
	});
}

export default Component;
