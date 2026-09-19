import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unnb5obww.css';
import '../../css/w/wybknb96j.css';
import '../../css/f/ff6avabmc.css';
import '../../css/n/nnqfly97l.css';
import '../../css/x/xc81b0btz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unnb5obww"/><path class="wybknb96j"/><path class="ff6avabmc"/><path class="nnqfly97l"/><path class="xc81b0btz"/>`,
		"fallback": "fxemoji:rocket",
	});
}

export default Component;
