import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/co62ijjon.css';
import '../../css/z/z1lyfs8lo.css';
import '../../css/j/jrpc1yvoz.css';
import '../../css/q/q-o9fjs9z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="co62ijjon"/><path class="z1lyfs8lo"/><path class="jrpc1yvoz"/><path class="q-o9fjs9z"/></g>`,
		"fallback": "streamline-kameleon-color:nail-varnish-pop",
	});
}

export default Component;
