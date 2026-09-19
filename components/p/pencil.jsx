import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v1tummutu.css';
import '../../css/b/bcfxl-b2t.css';
import '../../css/g/gwasqepzs.css';
import '../../css/h/hpsmcoe0e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="v1tummutu"/><path clip-rule="evenodd" class="bcfxl-b2t"/><path clip-rule="evenodd" class="gwasqepzs"/><path class="hpsmcoe0e"/></g>`,
		"fallback": "glyphs-poly:pencil",
	});
}

export default Component;
