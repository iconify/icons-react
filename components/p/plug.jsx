import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/k/kkd09i5ve.css';
import '../../css/o/o2jheybdw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGonZNscbv"><g class="v3_i3wktz"><path class="kkd09i5ve"/><path class="o2jheybdw"/></g></mask></defs><path mask="url(#SVGonZNscbv)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:plug",
	});
}

export default Component;
