import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/s/szc2z5mis.css';
import '../../css/s/sstindttr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGGipLeeZq"><g class="rohhhzb0l"><path class="szc2z5mis"/><path class="sstindttr"/></g></mask></defs><path mask="url(#SVGGipLeeZq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:two-dimensional-code-two",
	});
}

export default Component;
