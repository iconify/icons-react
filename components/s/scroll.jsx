import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_7x--shm.css';
import '../../css/l/luq2o7biq.css';
import '../../css/l/l13e8s3zd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_7x--shm"/><path class="luq2o7biq"/><path class="l13e8s3zd"/>`,
		"fallback": "token:scroll",
	});
}

export default Component;
