import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/w/wnfe9p2uz.css';
import '../../css/r/r-mrtlb8m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzcZtSACT"><g class="hv130ab-t"><rect transform="rotate(-45 17 24.071)" class="wnfe9p2uz"/><path class="r-mrtlb8m"/></g></mask></defs><path mask="url(#SVGzcZtSACT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:refresh-one",
	});
}

export default Component;
