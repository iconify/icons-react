import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/m/mm2f4fb5r.css';
import '../../css/g/g9ezxtipi.css';
import '../../css/x/xn3gssb2n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGosUT5cik"><g class="ufeehvblu"><path class="mm2f4fb5r"/><path class="g9ezxtipi"/><path class="xn3gssb2n"/></g></mask></defs><path mask="url(#SVGosUT5cik)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:multi-function-knife",
	});
}

export default Component;
