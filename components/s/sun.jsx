import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/eb-jj88gg.css';
import '../../css/l/lnsj22bse.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="eb-jj88gg"/><path class="lnsj22bse"/></g>`,
		"fallback": "charm:sun",
	});
}

export default Component;
