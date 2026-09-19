import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r8rpadpnu.css';
import '../../css/l/la2xe_bme.css';
import '../../css/w/wkl_labxn.css';
import '../../css/u/uyve4wbpr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGAPhOHbkU"><g class="ft5dv1b6b"><rect class="r8rpadpnu"/><path class="la2xe_bme"/><rect class="wkl_labxn"/><path class="uyve4wbpr"/></g></mask></defs><path mask="url(#SVGAPhOHbkU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:router",
	});
}

export default Component;
