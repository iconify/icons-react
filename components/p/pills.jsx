import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/a/acxhtihbv.css';
import '../../css/t/t37nn6bko.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlsC6fdGG"><g class="s9cl3zbei"><path clip-rule="evenodd" class="acxhtihbv"/><path class="t37nn6bko"/></g></mask></defs><path mask="url(#SVGlsC6fdGG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:pills",
	});
}

export default Component;
