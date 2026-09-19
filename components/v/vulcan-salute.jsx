import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/np0-gdcmd.css';
import '../../css/z/zzy-b1bbv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="np0-gdcmd"/><path class="zzy-b1bbv"/></g>`,
		"fallback": "fluent-emoji-flat:vulcan-salute",
	});
}

export default Component;
