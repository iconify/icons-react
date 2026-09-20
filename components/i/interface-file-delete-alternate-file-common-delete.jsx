import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/k1a1u2iys.css';
import '../../css/f/fqpqvwf8j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="k1a1u2iys"/><path class="fqpqvwf8j"/></g>`,
		"fallback": "streamline:interface-file-delete-alternate-file-common-delete",
	});
}

export default Component;
