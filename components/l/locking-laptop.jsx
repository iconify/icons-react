import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/e/e8jxhdczm.css';
import '../../css/s/skzye-b9q.css';
import '../../css/p/pwvf6kbgi.css';
import '../../css/j/jh_hxtbax.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG3KzmBdke"><g class="v3_i3wktz"><path class="e8jxhdczm"/><path class="skzye-b9q"/><rect class="pwvf6kbgi"/><path class="jh_hxtbax"/></g></mask></defs><path mask="url(#SVG3KzmBdke)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:locking-laptop",
	});
}

export default Component;
