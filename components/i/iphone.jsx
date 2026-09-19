import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/s/stexj9blz.css';
import '../../css/r/r6xesbc5x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGdS2opdAL"><g class="s9cl3zbei"><rect class="stexj9blz"/><path class="r6xesbc5x"/></g></mask></defs><path mask="url(#SVGdS2opdAL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:iphone",
	});
}

export default Component;
