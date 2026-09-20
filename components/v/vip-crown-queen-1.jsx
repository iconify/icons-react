import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i5zfcs_ls.css';
import '../../css/p/po5-ctbfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i5zfcs_ls"/><path class="po5-ctbfq"/></g>`,
		"fallback": "streamline-ultimate:vip-crown-queen-1",
	});
}

export default Component;
