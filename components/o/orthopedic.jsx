import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/q/qllazcb1e.css';
import '../../css/c/cl0c6rbvl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGDZfZBd9m"><g class="s9cl3zbei"><path clip-rule="evenodd" class="qllazcb1e"/><path class="cl0c6rbvl"/></g></mask></defs><path mask="url(#SVGDZfZBd9m)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:orthopedic",
	});
}

export default Component;
