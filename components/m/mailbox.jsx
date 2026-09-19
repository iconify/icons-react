import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n520vob6w.css';
import '../../css/j/jsik09t_m.css';
import '../../css/z/zfctwcctg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="n520vob6w"/><path class="jsik09t_m"/><path class="zfctwcctg"/></g>`,
		"fallback": "glyphs:mailbox",
	});
}

export default Component;
