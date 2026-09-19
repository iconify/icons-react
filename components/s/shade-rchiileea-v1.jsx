import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpgbx2bsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpgbx2bsl"/>`,
		"fallback": "cbi:shade-rchiileea-v1",
	});
}

export default Component;
