import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ywrrljb0f.css';
import '../../css/f/fqx9w60ay.css';
import '../../css/a/a53m6sb5f.css';
import '../../css/s/sclvgt7mn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ywrrljb0f"/><path class="fqx9w60ay"/><path class="a53m6sb5f"/><path class="sclvgt7mn"/></g>`,
		"fallback": "glyphs:rocket-duo",
	});
}

export default Component;
