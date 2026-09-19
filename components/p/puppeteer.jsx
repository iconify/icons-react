import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c18qyszxk.css';
import '../../css/c/cwaoh8bpd.css';
import '../../css/n/nrw-6wbkj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c18qyszxk"/><path class="cwaoh8bpd"/><path class="nrw-6wbkj"/>`,
		"fallback": "devicon-plain:puppeteer",
	});
}

export default Component;
