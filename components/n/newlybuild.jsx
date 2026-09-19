import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/v/vrkcudx6t.css';
import '../../css/k/kze9bbbkb.css';
import '../../css/z/zxg8_ebhl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGDDuZGc2I"><g class="wwvp95byt"><path class="vrkcudx6t"/><rect class="kze9bbbkb"/><path class="zxg8_ebhl"/></g></mask></defs><path mask="url(#SVGDDuZGc2I)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:newlybuild",
	});
}

export default Component;
