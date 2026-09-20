import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lvtlpgboo.css';
import '../../css/d/doa526vbf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="lvtlpgboo"/><path class="doa526vbf"/></g>`,
		"fallback": "streamline:toilet-man",
	});
}

export default Component;
