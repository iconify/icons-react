import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/m/m2blynbna.css';
import '../../css/q/q51ei7bew.css';
import '../../css/l/lrrctebji.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnqgV7dAC"><g class="ufeehvblu"><path class="m2blynbna"/><path class="q51ei7bew"/><path class="lrrctebji"/></g></mask></defs><path mask="url(#SVGnqgV7dAC)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:trend",
	});
}

export default Component;
