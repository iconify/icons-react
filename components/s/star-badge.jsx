import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/accuqpj7j.css';
import '../../css/b/bv9senv4a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="accuqpj7j"/><path class="bv9senv4a"/></g>`,
		"fallback": "streamline:star-badge",
	});
}

export default Component;
