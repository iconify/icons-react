import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/v4ycr6bwt.css';
import '../../css/q/qw-l2gf9m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="v4ycr6bwt"/><path class="qw-l2gf9m"/></g>`,
		"fallback": "streamline-flex:music-note-circle",
	});
}

export default Component;
