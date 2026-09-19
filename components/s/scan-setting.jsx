import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/l/l8-7_vbmo.css';
import '../../css/v/vn2loybei.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGSqD1uCIk"><g class="wwvp95byt"><rect class="l8-7_vbmo"/><path class="vn2loybei"/></g></mask></defs><path mask="url(#SVGSqD1uCIk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:scan-setting",
	});
}

export default Component;
