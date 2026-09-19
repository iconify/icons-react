import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/t/th3-pvhuu.css';
import '../../css/f/fcp723b9j.css';
import '../../css/t/trc0robos.css';
import '../../css/q/qeyb3pb8p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGsYKZIesr"><g class="rohhhzb0l"><path class="th3-pvhuu"/><path class="fcp723b9j"/><circle class="trc0robos"/><circle class="qeyb3pb8p"/></g></mask></defs><path mask="url(#SVGsYKZIesr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:owl",
	});
}

export default Component;
