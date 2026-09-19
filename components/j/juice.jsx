import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/i/iyk_fjbav.css';
import '../../css/n/n50kjvxhj.css';
import '../../css/d/d0j30xtfa.css';
import '../../css/k/kt5shjbak.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGL6W7AcMV"><g class="rohhhzb0l"><path class="iyk_fjbav"/><rect class="n50kjvxhj"/><path class="d0j30xtfa"/><path class="kt5shjbak"/></g></mask></defs><path mask="url(#SVGL6W7AcMV)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:juice",
	});
}

export default Component;
