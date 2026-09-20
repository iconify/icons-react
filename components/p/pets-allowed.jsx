import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/owpc7f-pg.css';
import '../../css/p/pw-tp7bkb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="owpc7f-pg"/><path class="pw-tp7bkb"/></g>`,
		"fallback": "streamline:pets-allowed",
	});
}

export default Component;
