import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/c/crnb93ntl.css';
import '../../css/c/c575j-byr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGKkdZ2csA"><g class="wwvp95byt"><path class="crnb93ntl"/><path class="c575j-byr"/></g></mask></defs><path mask="url(#SVGKkdZ2csA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:success",
	});
}

export default Component;
