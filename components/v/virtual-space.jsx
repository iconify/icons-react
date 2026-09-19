import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wckr9kb1z.css';
import '../../css/x/xhc6meu_c.css';
import '../../css/a/azz2-zbpr.css';
import '../../css/w/weswpdbxi.css';
import '../../css/d/dnxlfvbnp.css';
import '../../css/e/efivp5tbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wckr9kb1z"/><circle class="xhc6meu_c"/><circle class="azz2-zbpr"/><circle class="weswpdbxi"/><circle class="dnxlfvbnp"/><circle class="efivp5tbz"/>`,
		"fallback": "eos-icons:virtual-space",
	});
}

export default Component;
