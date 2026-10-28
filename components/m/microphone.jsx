import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/m/m8llozdhx.css';
import '../../css/m/mr0eh2byu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect class="m8llozdhx"/><path class="mr0eh2byu"/></g>`,
		"fallback": "codex:microphone",
	});
}

export default Component;
