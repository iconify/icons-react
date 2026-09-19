import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/x/x4tswvbrt.css';
import '../../css/b/bfyy76dbl.css';
import '../../css/m/m2ok91k_r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGj6SymeWI"><g class="wwvp95byt"><path class="x4tswvbrt"/><path class="bfyy76dbl"/><path class="m2ok91k_r"/></g></mask></defs><path mask="url(#SVGj6SymeWI)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:trousers-bell-bottoms",
	});
}

export default Component;
