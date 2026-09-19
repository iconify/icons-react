import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yu3yqejem.css';
import '../../css/q/qctsrhxrz.css';
import '../../css/n/npiex2b_n.css';
import '../../css/v/vgp5_qbet.css';
import '../../css/f/fctrv8cli.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yu3yqejem"/><path class="qctsrhxrz"/><path class="npiex2b_n"/><path class="vgp5_qbet"/><path class="fctrv8cli"/></g>`,
		"fallback": "fluent-emoji-flat:melting-face",
	});
}

export default Component;
