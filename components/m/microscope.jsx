import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fnn0khbkt.css';
import '../../css/a/a84os_-eu.css';
import '../../css/p/pfpbgjyyk.css';
import '../../css/v/v9r_7eb6p.css';
import '../../css/s/s3ce7if1k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fnn0khbkt"/><path class="a84os_-eu"/><path class="pfpbgjyyk"/><path class="v9r_7eb6p"/><path class="s3ce7if1k"/></g>`,
		"fallback": "fluent-emoji-flat:microscope",
	});
}

export default Component;
