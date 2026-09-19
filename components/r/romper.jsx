import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/j/j4-7zyb4i.css';
import '../../css/f/fg--arb4f.css';
import '../../css/m/mmwmy24ud.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGg19N5cUF"><g class="wwvp95byt"><path class="j4-7zyb4i"/><path class="fg--arb4f"/><path class="mmwmy24ud"/></g></mask></defs><path mask="url(#SVGg19N5cUF)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:romper",
	});
}

export default Component;
