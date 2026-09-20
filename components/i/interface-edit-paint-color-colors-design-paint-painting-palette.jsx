import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y-zgfhx6a.css';
import '../../css/a/ax6wa8b5f.css';
import '../../css/s/s7w7_126a.css';
import '../../css/d/d8jw7fb1v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="y-zgfhx6a"/><circle class="ax6wa8b5f"/><circle class="s7w7_126a"/><path class="d8jw7fb1v"/></g>`,
		"fallback": "streamline:interface-edit-paint-color-colors-design-paint-painting-palette",
	});
}

export default Component;
