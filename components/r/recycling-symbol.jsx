import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kynbx4b0y.css';
import '../../css/y/yku_4z9pl.css';
import '../../css/v/vv42d_2vz.css';
import '../../css/x/xi4urpbuh.css';
import '../../css/x/xt9kihc-l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGXzlerD0G" cx="79.4" cy="71.4" r="117.8" gradientUnits="userSpaceOnUse"><stop offset="0" class="kynbx4b0y"/><stop offset=".85" class="yku_4z9pl"/><stop offset="1" class="yku_4z9pl"/></radialGradient></defs><path class="vv42d_2vz"/><path fill="url(#SVGXzlerD0G)" transform="matrix(3 0 0 3 -40.343 -40.343)" class="xi4urpbuh"/><path class="xt9kihc-l"/>`,
		"fallback": "xero-emoji:recycling-symbol",
	});
}

export default Component;
