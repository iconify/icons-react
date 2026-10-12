import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/ms8uan7xo.css';
import '../../css/v/vtykedtfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ms8uan7xo"/><path class="vtykedtfn"/></g>`,
		"fallback": "lucide-extended:shield-ban-duotone",
	});
}

export default Component;
