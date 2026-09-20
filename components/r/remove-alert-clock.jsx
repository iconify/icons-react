import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/g/ggem6y4bi.css';
import '../../css/c/c8su1ehkj.css';
import '../../css/q/qaj-6bcqj.css';
import '../../css/k/k3xsyrn4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="ggem6y4bi"/><path class="c8su1ehkj"/><path class="qaj-6bcqj"/><path class="k3xsyrn4b"/></g>`,
		"fallback": "streamline-sharp-color:remove-alert-clock",
	});
}

export default Component;
