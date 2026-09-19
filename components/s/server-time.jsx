import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okximigwt.css';
import '../../css/d/dlp7nstpk.css';
import '../../css/a/avvjpobem.css';
import '../../css/c/cr9nds-9e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okximigwt"/><circle class="dlp7nstpk"/><path class="avvjpobem"/><path class="cr9nds-9e"/>`,
		"fallback": "carbon:server-time",
	});
}

export default Component;
