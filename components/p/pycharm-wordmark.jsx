import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbv8mfbkk.css';
import '../../css/i/iutm0rqkj.css';
import '../../css/b/bxz985ukn.css';
import '../../css/r/raegd8bym.css';
import '../../css/f/frtv1_b6q.css';
import '../../css/t/tzk9lh83j.css';
import '../../css/e/exqzzobrz.css';
import '../../css/l/ll1-_1hvp.css';
import '../../css/r/rl7a-5b7l.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVG97hLmeUR" x1="7.621" x2="61.248" y1="64.719" y2="39.856" gradientTransform="translate(0 45.166)scale(.48145)" gradientUnits="userSpaceOnUse"><stop offset=".1" class="fbv8mfbkk"/><stop offset=".59" class="iutm0rqkj"/></linearGradient><linearGradient id="SVGgkKXrcHb" x1="60.019" x2="1.313" y1="59.778" y2="1.072" gradientTransform="translate(0 45.166)scale(.48145)" gradientUnits="userSpaceOnUse"><stop offset=".3" class="iutm0rqkj"/><stop offset=".7" class="bxz985ukn"/></linearGradient></defs><path clip-rule="evenodd" class="raegd8bym"/><path class="frtv1_b6q"/><path fill="url(#SVG97hLmeUR)" class="tzk9lh83j"/><path fill="url(#SVGgkKXrcHb)" class="exqzzobrz"/><path class="ll1-_1hvp"/><path class="rl7a-5b7l"/>`,
		"fallback": "devicon:pycharm-wordmark",
	});
}

export default Component;
