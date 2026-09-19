import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/o/oc1o0hkfq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGx4eOVcfO"><g class="s9cl3zbei"><path class="oo_vs07_g"/><path class="oc1o0hkfq"/></g></mask></defs><path mask="url(#SVGx4eOVcfO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:voice-one",
	});
}

export default Component;
