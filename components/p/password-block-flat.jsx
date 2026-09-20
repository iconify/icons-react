import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/eamz0-w_f.css';
import '../../css/t/ti44dub-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="eamz0-w_f"/><path class="ti44dub-d"/></g>`,
		"fallback": "streamline-sharp-color:password-block-flat",
	});
}

export default Component;
