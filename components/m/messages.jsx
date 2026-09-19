import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/m2blynbna.css';
import '../../css/i/isa-krbuv.css';
import '../../css/c/cbfu_ebav.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG5lr6Heij"><g class="s9cl3zbei"><path class="m2blynbna"/><path class="isa-krbuv"/><path class="cbfu_ebav"/></g></mask></defs><path mask="url(#SVG5lr6Heij)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:messages",
	});
}

export default Component;
