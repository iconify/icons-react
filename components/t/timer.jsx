import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/x/x1fhckaoa.css';
import '../../css/f/f80ucki7e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQqiRNbrS"><g class="rohhhzb0l"><circle class="x1fhckaoa"/><path class="f80ucki7e"/></g></mask></defs><path mask="url(#SVGQqiRNbrS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:timer",
	});
}

export default Component;
