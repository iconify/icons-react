import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/a/a0zl88bqz.css';
import '../../css/f/f7o5wcbyu.css';
import '../../css/c/ccb59bcuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="a0zl88bqz"/><circle class="f7o5wcbyu"/><path class="ccb59bcuz"/></g>`,
		"fallback": "iconamoon:sign-percent",
	});
}

export default Component;
