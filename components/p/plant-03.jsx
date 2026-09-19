import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/ucmf90w8w.css';
import '../../css/r/rpipyf98w.css';
import '../../css/d/dks-6wcfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ucmf90w8w"/><path class="rpipyf98w"/><path class="dks-6wcfg"/></g>`,
		"fallback": "hugeicons:plant-03",
	});
}

export default Component;
