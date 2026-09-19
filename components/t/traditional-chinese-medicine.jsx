import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/i/i5nc4sbme.css';
import '../../css/r/rn30mkb4n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGi4nHIdLK"><g class="rohhhzb0l"><path clip-rule="evenodd" class="i5nc4sbme"/><path class="rn30mkb4n"/></g></mask></defs><path mask="url(#SVGi4nHIdLK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:traditional-chinese-medicine",
	});
}

export default Component;
