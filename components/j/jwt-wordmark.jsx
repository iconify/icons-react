import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqevwuihn.css';
import '../../css/h/h3y3srhuw.css';
import '../../css/m/m0ny71ltk.css';
import '../../css/d/dpj7zshvp.css';
import '../../css/a/annxhtbvs.css';
import '../../css/y/ypf2-ybrp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqevwuihn"/><path class="h3y3srhuw"/><path class="m0ny71ltk"/><path class="dpj7zshvp"/><path class="annxhtbvs"/><path class="ypf2-ybrp"/>`,
		"fallback": "devicon:jwt-wordmark",
	});
}

export default Component;
