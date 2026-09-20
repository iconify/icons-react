import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tmy44dboo.css';
import '../../css/j/jqe5hhbwj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="tmy44dboo"/><path class="jqe5hhbwj"/></g>`,
		"fallback": "streamline:interface-edit-clip-binder-clip-clipper-company-office-supplies-work",
	});
}

export default Component;
