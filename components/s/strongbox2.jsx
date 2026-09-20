import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rvymobzlx.css';
import '../../css/w/wmrwclbxu.css';
import '../../css/o/otmc_piqe.css';
import '../../css/t/tuzq10ybp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rvymobzlx"/><path class="wmrwclbxu"/><path class="otmc_piqe"/><path class="tuzq10ybp"/></g>`,
		"fallback": "reicon:strongbox2",
	});
}

export default Component;
