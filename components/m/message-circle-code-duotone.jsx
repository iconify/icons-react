import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u_ec1fbcy.css';
import '../../css/c/cr23qknpj.css';
import '../../css/o/owcrvxbsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u_ec1fbcy"/><path class="cr23qknpj"/><path class="owcrvxbsm"/></g>`,
		"fallback": "lucide-extended:message-circle-code-duotone",
	});
}

export default Component;
