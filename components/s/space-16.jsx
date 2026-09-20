import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8dgv7ect.css';
import '../../css/c/c4hlqdbyg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8dgv7ect"/><path class="c4hlqdbyg"/>`,
		"fallback": "octicon:space-16",
	});
}

export default Component;
