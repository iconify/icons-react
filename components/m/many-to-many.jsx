import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/r/r-8dawoyr.css';
import '../../css/l/ll6bpkbte.css';
import '../../css/v/vmbylbb-t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGUG4GPdtL"><g class="rohhhzb0l"><path class="r-8dawoyr"/><path class="ll6bpkbte"/><path class="vmbylbb-t"/></g></mask></defs><path mask="url(#SVGUG4GPdtL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:many-to-many",
	});
}

export default Component;
