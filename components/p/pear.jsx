import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i1gnly--z.css';
import '../../css/o/olnkf1ltv.css';
import '../../css/d/djovwac8v.css';
import '../../css/f/f66-7qizp.css';
import '../../css/k/ktnx8ub9f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i1gnly--z"/><path class="olnkf1ltv"/><circle class="djovwac8v"/><circle class="f66-7qizp"/><circle class="ktnx8ub9f"/></g>`,
		"fallback": "icon-park-outline:pear",
	});
}

export default Component;
