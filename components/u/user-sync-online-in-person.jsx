import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cg1ldfepb.css';
import '../../css/t/tyftk6bnd.css';
import '../../css/j/jdrs_-bia.css';
import '../../css/e/etvk4jbiq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="cg1ldfepb"/><path class="tyftk6bnd"/><path class="jdrs_-bia"/><path class="etvk4jbiq"/></g>`,
		"fallback": "streamline-flex:user-sync-online-in-person",
	});
}

export default Component;
