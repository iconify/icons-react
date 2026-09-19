import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yj4094b4l.css';
import '../../css/x/xkbv4mpwl.css';
import '../../css/j/jpebpm_il.css';
import '../../css/u/u1ym83bni.css';
import '../../css/a/a7g0cqbrg.css';
import '../../css/h/h-jgvl48d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGSdjkRcoT"><g class="ft5dv1b6b"><path class="yj4094b4l"/><circle class="xkbv4mpwl"/><circle class="jpebpm_il"/><path class="u1ym83bni"/><path class="a7g0cqbrg"/><path class="h-jgvl48d"/></g></mask></defs><path mask="url(#SVGSdjkRcoT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:railway",
	});
}

export default Component;
