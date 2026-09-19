import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uff4gd80n.css';
import '../../css/k/kgcmrhbgu.css';
import '../../css/t/ty89t8tks.css';
import '../../css/u/ucgj1ipte.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJzyaoc0K"><g class="ft5dv1b6b"><path class="uff4gd80n"/><path class="kgcmrhbgu"/><path class="ty89t8tks"/><path class="ucgj1ipte"/></g></mask></defs><path mask="url(#SVGJzyaoc0K)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:waterpolo-one",
	});
}

export default Component;
