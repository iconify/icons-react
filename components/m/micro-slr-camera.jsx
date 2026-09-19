import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y39sggbha.css';
import '../../css/e/e2gn1lacr.css';
import '../../css/v/vqyenpb5c.css';
import '../../css/o/owvfs9bpr.css';
import '../../css/d/deix3sm7t.css';
import '../../css/d/d1f0r-t1t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y39sggbha"/><path class="e2gn1lacr"/><path class="vqyenpb5c"/><rect class="owvfs9bpr"/><path class="deix3sm7t"/><path class="d1f0r-t1t"/></g>`,
		"fallback": "icon-park:micro-slr-camera",
	});
}

export default Component;
