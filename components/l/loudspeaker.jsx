import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kod9bhbbs.css';
import '../../css/l/lngrxjb-x.css';
import '../../css/o/oqzecobzo.css';
import '../../css/l/l-crnq6jw.css';
import '../../css/y/y2s704hzi.css';
import '../../css/n/n60estbrf.css';
import '../../css/p/pkpz2qb5l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kod9bhbbs"/><path class="lngrxjb-x"/><path class="oqzecobzo"/><path class="l-crnq6jw"/><ellipse transform="rotate(-32.567 301.337 191.289)" class="y2s704hzi"/><path class="n60estbrf"/><path class="pkpz2qb5l"/>`,
		"fallback": "fxemoji:loudspeaker",
	});
}

export default Component;
