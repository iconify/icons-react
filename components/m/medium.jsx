import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1gfmgbwj.css';
import '../../css/z/z_i6pn2af.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1gfmgbwj"/><path class="z_i6pn2af"/>`,
		"fallback": "bxl:medium",
	});
}

export default Component;
