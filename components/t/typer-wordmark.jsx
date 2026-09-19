import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9_00hbai.css';
import '../../css/l/l_m-ojccy.css';
import '../../css/i/ib-739bah.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="z9_00hbai"/><rect class="l_m-ojccy"/><path class="ib-739bah"/>`,
		"fallback": "devicon:typer-wordmark",
	});
}

export default Component;
