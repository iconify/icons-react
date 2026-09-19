import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/m/mie1pybna.css';
import '../../css/w/wyu1zabwh.css';
import '../../css/v/v5bv_7bmi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGt2xF6gip"><g class="ufeehvblu"><path class="mie1pybna"/><path class="wyu1zabwh"/><path class="v5bv_7bmi"/></g></mask></defs><path mask="url(#SVGt2xF6gip)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:parking",
	});
}

export default Component;
