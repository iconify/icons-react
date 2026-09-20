import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo98i2bnx.css';
import '../../css/t/tiid34lxq.css';
import '../../css/c/cus_5pahm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo98i2bnx"/><path class="tiid34lxq"/><path class="cus_5pahm"/>`,
		"fallback": "token:srk",
	});
}

export default Component;
