import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt-yivboh.css';
import '../../css/x/xc7ndn9yy.css';
import '../../css/k/kusnjxbbc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTuf6aedj"><g clip-rule="evenodd" class="mt-yivboh"><path class="xc7ndn9yy"/><path class="kusnjxbbc"/></g></mask></defs><path mask="url(#SVGTuf6aedj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:vr-glasses",
	});
}

export default Component;
