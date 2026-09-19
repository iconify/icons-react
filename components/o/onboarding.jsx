import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7sr6ubzr.css';
import '../../css/w/w3z8g9bbs.css';
import '../../css/y/y-4lnqblw.css';
import '../../css/i/ii271fx5o.css';
import '../../css/z/z4km375or.css';
import '../../css/n/no94o5f7b.css';
import '../../css/d/dr2jl9rhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7sr6ubzr"/><path class="w3z8g9bbs"/><path class="y-4lnqblw"/><path class="ii271fx5o"/><path class="z4km375or"/><path class="no94o5f7b"/><path class="dr2jl9rhe"/>`,
		"fallback": "gcp:onboarding",
	});
}

export default Component;
