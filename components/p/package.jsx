import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l19lwdbaq.css';
import '../../css/n/nevij009o.css';
import '../../css/x/xkad-cchf.css';
import '../../css/v/vh7o13bvx.css';
import '../../css/e/ey4w976id.css';
import '../../css/e/epo1-47gl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l19lwdbaq"/><path class="nevij009o"/><path class="xkad-cchf"/><path class="vh7o13bvx"/><path class="ey4w976id"/><path class="epo1-47gl"/></g>`,
		"fallback": "fluent-emoji-flat:package",
	});
}

export default Component;
