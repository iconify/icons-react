import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/o59f9vbvm.css';
import '../../css/s/s4exkmb7g.css';
import '../../css/r/rnubj6bws.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="o59f9vbvm"/><path class="s4exkmb7g"/><path class="rnubj6bws"/></g>`,
		"fallback": "glyphs:smoke",
	});
}

export default Component;
