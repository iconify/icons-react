import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vaydc3yha.css';
import '../../css/c/cz5fhhqdn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vaydc3yha"/><path class="cz5fhhqdn"/></g>`,
		"fallback": "streamline:interface-content-file-empty-common-file",
	});
}

export default Component;
