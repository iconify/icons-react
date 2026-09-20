import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8ryl_bho.css';
import '../../css/g/gwmg8wt9v.css';
import '../../css/e/efp79h8_w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k8ryl_bho"/><path class="gwmg8wt9v"/><path class="efp79h8_w"/></g>`,
		"fallback": "streamline-kameleon-color:soccer-field-duo",
	});
}

export default Component;
