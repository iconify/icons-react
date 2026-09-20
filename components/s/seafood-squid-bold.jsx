import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bym9qzlxy.css';
import '../../css/y/yzb5i2o5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bym9qzlxy"/><path class="yzb5i2o5m"/>`,
		"fallback": "streamline-ultimate:seafood-squid-bold",
	});
}

export default Component;
