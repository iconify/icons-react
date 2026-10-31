import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/c/cuszwubiq.css';
import '../../css/w/wf6p9ebkw.css';
import '../../css/k/kcag22w9s.css';
import '../../css/v/vimxy0xre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="cuszwubiq"/><path class="wf6p9ebkw"/><path class="kcag22w9s wm-k"/><path class="vimxy0xre wm-a"/></g>`,
		"fallback": "withicons-kawaii:qr-code",
	});
}

export default Component;
