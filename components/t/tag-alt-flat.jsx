import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mu98i2b4w.css';
import '../../css/p/pe5n98fko.css';
import '../../css/b/bf25np2kj.css';
import '../../css/o/orx8v0b-w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mu98i2b4w"/><path class="pe5n98fko"/><path class="bf25np2kj"/><path clip-rule="evenodd" class="orx8v0b-w"/></g>`,
		"fallback": "streamline-color:tag-alt-flat",
	});
}

export default Component;
