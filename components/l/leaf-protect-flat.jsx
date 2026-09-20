import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mskaodbsw.css';
import '../../css/w/wh1f9q4dk.css';
import '../../css/k/kj9mhnbey.css';
import '../../css/g/gsoczrbif.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mskaodbsw"/><path clip-rule="evenodd" class="wh1f9q4dk"/><path clip-rule="evenodd" class="kj9mhnbey"/><path clip-rule="evenodd" class="gsoczrbif"/></g>`,
		"fallback": "streamline-plump-color:leaf-protect-flat",
	});
}

export default Component;
