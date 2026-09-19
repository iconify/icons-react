import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nvt_1xb1z.css';
import '../../css/p/ppq2q6b1t.css';
import '../../css/p/pzxytvb4d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG2DYBUjSs"><g class="ft5dv1b6b"><rect class="nvt_1xb1z"/><path class="ppq2q6b1t"/><path clip-rule="evenodd" class="pzxytvb4d"/></g></mask></defs><path mask="url(#SVG2DYBUjSs)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:view-list",
	});
}

export default Component;
