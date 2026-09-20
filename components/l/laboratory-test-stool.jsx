import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bzdndrbiv.css';
import '../../css/e/efsxkcctv.css';
import '../../css/j/jnp2sbbve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bzdndrbiv"/><path class="efsxkcctv"/><path class="jnp2sbbve"/></g>`,
		"fallback": "streamline-ultimate-color:laboratory-test-stool",
	});
}

export default Component;
