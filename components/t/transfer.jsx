import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ha5ktc05w.css';
import '../../css/n/nw2_zeb4l.css';
import '../../css/f/f2jynqjlb.css';
import '../../css/i/izfv-wzfa.css';
import '../../css/j/jqrq48bfx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpiKwcd6c"><g class="ft5dv1b6b"><path class="ha5ktc05w"/><path class="nw2_zeb4l"/><path class="f2jynqjlb"/><circle class="izfv-wzfa"/><circle class="jqrq48bfx"/></g></mask></defs><path mask="url(#SVGpiKwcd6c)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:transfer",
	});
}

export default Component;
