import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9vps2b8q.css';
import '../../css/i/i2nyp1b4x.css';
import '../../css/n/n3xsaaczl.css';

const viewBox = {"width":45,"height":45};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9vps2b8q"/><path class="i2nyp1b4x"/><path class="n3xsaaczl"/>`,
		"fallback": "thesvg-color:learnthis",
	});
}

export default Component;
