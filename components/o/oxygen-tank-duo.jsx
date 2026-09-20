import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m0ixkvs5j.css';
import '../../css/d/d2bb-3puv.css';
import '../../css/q/qk3z62bic.css';
import '../../css/v/vh0i4blho.css';
import '../../css/p/pzxd3rbwj.css';
import '../../css/u/u4ptkpqrs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m0ixkvs5j"/><path class="d2bb-3puv"/><path class="qk3z62bic"/><path class="vh0i4blho"/><path class="pzxd3rbwj"/><path class="u4ptkpqrs"/></g>`,
		"fallback": "streamline-kameleon-color:oxygen-tank-duo",
	});
}

export default Component;
