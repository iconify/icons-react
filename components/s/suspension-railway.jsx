import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s0ratcrkt.css';
import '../../css/e/ew-vzbb3k.css';
import '../../css/w/wylva9bqb.css';
import '../../css/d/dbxznuouj.css';
import '../../css/a/auze_vb9m.css';
import '../../css/f/fb3p04ljv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s0ratcrkt"/><path class="ew-vzbb3k"/><path class="wylva9bqb"/><path class="dbxznuouj"/><path class="auze_vb9m"/><path class="fb3p04ljv"/></g>`,
		"fallback": "fluent-emoji-flat:suspension-railway",
	});
}

export default Component;
