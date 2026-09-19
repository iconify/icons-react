import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/n/nxl8u5bfk.css';
import '../../css/g/gnqtz4biq.css';
import '../../css/k/kmrt0suyf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG5JP3obpr"><g class="wwvp95byt"><path class="nxl8u5bfk"/><path class="gnqtz4biq"/><path class="kmrt0suyf"/></g></mask></defs><path mask="url(#SVG5JP3obpr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:invalid-files",
	});
}

export default Component;
