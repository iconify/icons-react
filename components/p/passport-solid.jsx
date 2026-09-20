import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlrsj2b6d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qlrsj2b6d"/>`,
		"fallback": "streamline:passport-solid",
	});
}

export default Component;
