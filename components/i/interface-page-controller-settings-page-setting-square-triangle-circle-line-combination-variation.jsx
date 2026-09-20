import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/b6zwu2vkg.css';
import '../../css/o/o9jkvab_f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="b6zwu2vkg"/><circle class="o9jkvab_f"/></g>`,
		"fallback": "streamline:interface-page-controller-settings-page-setting-square-triangle-circle-line-combination-variation",
	});
}

export default Component;
