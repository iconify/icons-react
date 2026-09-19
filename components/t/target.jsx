import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxji-uapf.css';
import '../../css/d/dqouzac4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer gxji-uapf"/><path class="dqouzac4x duoicon-primary-layer"/>`,
		"fallback": "duo-icons:target",
	});
}

export default Component;
