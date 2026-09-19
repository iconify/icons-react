import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/q/qvlv7ibpn.css';
import '../../css/o/o077bkjlw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpRpbUcuZ"><g class="ufeehvblu"><path class="qvlv7ibpn"/><path class="o077bkjlw"/></g></mask></defs><path mask="url(#SVGpRpbUcuZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:protect",
	});
}

export default Component;
