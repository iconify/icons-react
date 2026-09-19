import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eeftv-f_s.css';
import '../../css/w/wwi7ougfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eeftv-f_s"/><path class="wwi7ougfc"/>`,
		"fallback": "boxicons:owl-filled",
	});
}

export default Component;
