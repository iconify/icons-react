import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jbxmj6bpb.css';
import '../../css/e/e5cue-b9t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jbxmj6bpb"/><circle class="e5cue-b9t"/></g>`,
		"fallback": "streamline:programming-browser-setting-window-gear-app-code-programming-cog-settings-apps",
	});
}

export default Component;
