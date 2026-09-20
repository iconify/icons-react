import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fqann9wgm.css';
import '../../css/o/ohlabnb3o.css';
import '../../css/y/yylu5vfhn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="fqann9wgm"/><path class="ohlabnb3o"/><path class="yylu5vfhn"/></g>`,
		"fallback": "streamline:interface-arrows-synchronize-arrows-loading-load-sync-synchronize-arrow-reload",
	});
}

export default Component;
