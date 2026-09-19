import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/m/mzszod_2j.css';
import '../../css/c/cib_w9bkb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGSNjbrdmx"><g class="wwvp95byt"><circle class="mzszod_2j"/><path class="cib_w9bkb"/></g></mask></defs><path mask="url(#SVGSNjbrdmx)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:trademark",
	});
}

export default Component;
