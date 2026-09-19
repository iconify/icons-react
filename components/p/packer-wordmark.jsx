import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chs_wwive.css';
import '../../css/d/d4xm7xbec.css';
import '../../css/z/z1hhkczws.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chs_wwive"/><path class="d4xm7xbec"/><path class="z1hhkczws"/>`,
		"fallback": "devicon:packer-wordmark",
	});
}

export default Component;
