import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/ojzux79tu.css';
import '../../css/v/veywnacxg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ojzux79tu"/><path class="veywnacxg"/></g>`,
		"fallback": "streamline-flex:tape-cassette-record",
	});
}

export default Component;
