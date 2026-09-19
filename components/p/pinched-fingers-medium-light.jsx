import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uo5shdcha.css';
import '../../css/x/xvsb00ose.css';
import '../../css/s/sb_pp4bnl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uo5shdcha"/><path class="xvsb00ose"/><path class="sb_pp4bnl"/></g>`,
		"fallback": "fluent-emoji-flat:pinched-fingers-medium-light",
	});
}

export default Component;
