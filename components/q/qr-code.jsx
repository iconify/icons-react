import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/b/br-cd-bbd.css';
import '../../css/q/qfbt3bcyu.css';
import '../../css/h/hfx4ozb9p.css';
import '../../css/u/ui6zico0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><rect class="br-cd-bbd"/><rect class="qfbt3bcyu"/><rect class="hfx4ozb9p"/><path class="ui6zico0d"/></g>`,
		"fallback": "codex:qr-code",
	});
}

export default Component;
