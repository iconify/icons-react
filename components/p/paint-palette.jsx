import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/k/klp46bcfj.css';
import '../../css/t/t_fvrebcb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="klp46bcfj"/><path class="t_fvrebcb"/></g>`,
		"fallback": "streamline-plump:paint-palette",
	});
}

export default Component;
