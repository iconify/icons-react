import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txbq1dqrx.css';
import '../../css/s/ss55p0bgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="txbq1dqrx"/><path clip-rule="evenodd" class="ss55p0bgk"/>`,
		"fallback": "cuida:sample-container-outline",
	});
}

export default Component;
