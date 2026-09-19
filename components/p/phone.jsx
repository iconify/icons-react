import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/u/ujed1zb_y.css';
import '../../css/w/wwxsycqox.css';
import '../../css/o/os5lo5ptn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="ujed1zb_y"/><path class="wwxsycqox"/><path class="os5lo5ptn"/></g>`,
		"fallback": "icon-park:phone",
	});
}

export default Component;
