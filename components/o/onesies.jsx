import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/k/k62bcpbzj.css';
import '../../css/i/i4fqsvg1a.css';
import '../../css/m/mzk9v8g-t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGisQ0LeEB"><g class="wwvp95byt"><path class="k62bcpbzj"/><path class="i4fqsvg1a"/><path class="mzk9v8g-t"/></g></mask></defs><path mask="url(#SVGisQ0LeEB)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:onesies",
	});
}

export default Component;
