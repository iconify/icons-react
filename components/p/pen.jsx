import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sna2dnffi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sna2dnffi"/>`,
		"fallback": "vadivam:pen",
	});
}

export default Component;
