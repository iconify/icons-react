import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nmhlnubfi.css';
import '../../css/w/whku1ubxh.css';
import '../../css/t/tyczzdbmu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGPdwizdKj"><g class="ft5dv1b6b"><path class="nmhlnubfi"/><path clip-rule="evenodd" class="whku1ubxh"/><path class="tyczzdbmu"/></g></mask></defs><path mask="url(#SVGPdwizdKj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:people-minus",
	});
}

export default Component;
