import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fqann9wgm.css';
import '../../css/l/lxbmhf4sm.css';
import '../../css/m/m96sjcbvr.css';
import '../../css/i/i5sj4ifpi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="fqann9wgm"/><path class="lxbmhf4sm"/><path class="m96sjcbvr"/><circle class="i5sj4ifpi"/></g>`,
		"fallback": "streamline:interface-arrows-synchronize-warning-arrow-fail-notification-sync-warning-failure-synchronize-error",
	});
}

export default Component;
