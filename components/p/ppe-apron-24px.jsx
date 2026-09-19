import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl-m4bbyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xl-m4bbyc"/>`,
		"fallback": "healthicons:ppe-apron-24px",
	});
}

export default Component;
