import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/org_7jb0n.css';
import '../../css/h/h3at2v6ox.css';
import '../../css/k/k374v1b5s.css';
import '../../css/r/r9abw96ko.css';
import '../../css/f/fb86pfnco.css';
import '../../css/r/r6ssi6nrw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="org_7jb0n"><path class="h3at2v6ox"/><circle class="k374v1b5s"/></g><path class="r9abw96ko"/><circle class="fb86pfnco"/><path class="r6ssi6nrw"/>`,
		"fallback": "flat-color-icons:search",
	});
}

export default Component;
