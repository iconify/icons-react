import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/u/ufudkb00c.css';
import '../../css/t/thdsce8mf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0OxWMYek"><g class="wwvp95byt"><path class="ufudkb00c"/><path class="thdsce8mf"/></g></mask></defs><path mask="url(#SVG0OxWMYek)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:transaction",
	});
}

export default Component;
