import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/w/wgd6nob9p.css';
import '../../css/y/yxozyjbzj.css';
import '../../css/p/ptt2qbbym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="wgd6nob9p"/><path class="yxozyjbzj"/></g><path class="ptt2qbbym"/>`,
		"fallback": "solar:link-minimalistic-2-bold-duotone",
	});
}

export default Component;
