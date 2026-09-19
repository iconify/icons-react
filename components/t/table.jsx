import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/i/iyn5nib5u.css';
import '../../css/x/xrwtinblr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG3UgbJdrl"><g class="wwvp95byt"><rect class="iyn5nib5u"/><path class="xrwtinblr"/></g></mask></defs><path mask="url(#SVG3UgbJdrl)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:table",
	});
}

export default Component;
