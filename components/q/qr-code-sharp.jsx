import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls4d_78wt.css';
import '../../css/z/z6z042bmd.css';
import '../../css/a/a-zsnuk-t.css';
import '../../css/w/wx0qoilek.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls4d_78wt"/><path class="z6z042bmd"/><path class="a-zsnuk-t"/><path class="wx0qoilek"/>`,
		"fallback": "ion:qr-code-sharp",
	});
}

export default Component;
