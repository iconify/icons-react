import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eplcf-iln.css';
import '../../css/e/emdguns3d.css';
import '../../css/o/o-jviabzm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eplcf-iln"/><path class="emdguns3d"/><path class="o-jviabzm"/></g>`,
		"fallback": "glyphs:temperature-cold-duo",
	});
}

export default Component;
