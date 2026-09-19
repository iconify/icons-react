import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/w/wxpv6lbah.css';
import '../../css/g/gw8968ukh.css';
import '../../css/c/ck-maf5kk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1WTygbwX"><g class="gopnm44um"><path class="wxpv6lbah"/><path class="gw8968ukh"/><path class="ck-maf5kk"/></g></mask></defs><path mask="url(#SVG1WTygbwX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:preschool",
	});
}

export default Component;
