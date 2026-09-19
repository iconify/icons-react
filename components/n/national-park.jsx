import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ihsxy00ij.css';
import '../../css/f/f4wfyq6uy.css';
import '../../css/g/ge4w31dgz.css';
import '../../css/v/v178z7v7c.css';
import '../../css/n/nm2raetgr.css';
import '../../css/a/ayts_4bzb.css';
import '../../css/d/d31n5fbdw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ihsxy00ij"/><path class="f4wfyq6uy"/><path class="ge4w31dgz"/><path class="v178z7v7c"/><path class="nm2raetgr"/><path class="ayts_4bzb"/><path class="d31n5fbdw"/></g>`,
		"fallback": "fluent-emoji-flat:national-park",
	});
}

export default Component;
