import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/x/x9t75_v4j.css';
import '../../css/t/t3so_ypzw.css';
import '../../css/x/x-m_43jif.css';
import '../../css/u/urjdred5d.css';
import '../../css/m/mhizpgbpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="x9t75_v4j"/><path class="t3so_ypzw wm-shine"/><path class="wm-k x-m_43jif"/><path class="urjdred5d wm-a"/><path class="mhizpgbpy wm-deco"/></g>`,
		"fallback": "withicons-kawaii:pickaxe",
	});
}

export default Component;
