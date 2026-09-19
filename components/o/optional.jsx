import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/u/ufudkb00c.css';
import '../../css/m/mbtwhssjn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGqvOEkbwP"><g class="wwvp95byt"><path class="ufudkb00c"/><path class="mbtwhssjn"/></g></mask></defs><path mask="url(#SVGqvOEkbwP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:optional",
	});
}

export default Component;
