import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/w/w55in7b1i.css';
import '../../css/s/sekn0obxv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1lZ6ld1M"><g class="wwvp95byt"><path class="w55in7b1i"/><path class="sekn0obxv"/></g></mask></defs><path mask="url(#SVG1lZ6ld1M)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:loading-three",
	});
}

export default Component;
