import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tuzg4z2ub.css';
import '../../css/f/f15nkcbal.css';
import '../../css/b/bp_-mziii.css';
import '../../css/j/jcw8xccaa.css';
import '../../css/o/o3o-f27dr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcnKxHeba"><g class="ft5dv1b6b"><rect class="tuzg4z2ub"/><path class="f15nkcbal"/><path class="bp_-mziii"/><circle class="jcw8xccaa"/><path class="o3o-f27dr"/></g></mask></defs><path mask="url(#SVGcnKxHeba)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:microwave-oven",
	});
}

export default Component;
