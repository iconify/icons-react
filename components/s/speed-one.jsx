import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/f/fr-05wjki.css';
import '../../css/a/a350jnbrs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="fr-05wjki"/><path class="a350jnbrs"/></g>`,
		"fallback": "icon-park-solid:speed-one",
	});
}

export default Component;
