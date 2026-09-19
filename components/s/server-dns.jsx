import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fse9x8baa.css';
import '../../css/d/dlp7nstpk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fse9x8baa"/><circle class="dlp7nstpk"/>`,
		"fallback": "carbon:server-dns",
	});
}

export default Component;
