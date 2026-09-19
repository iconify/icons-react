import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m58734bmb.css';
import '../../css/b/b3dakxwyz.css';
import '../../css/n/n8ps1yhvj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m58734bmb"/><path class="b3dakxwyz"/><path class="n8ps1yhvj"/>`,
		"fallback": "devicon:leetcode-wordmark",
	});
}

export default Component;
