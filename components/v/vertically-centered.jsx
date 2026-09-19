import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/m/ms27-ub9z.css';
import '../../css/p/piwg5-x2u.css';
import '../../css/c/czqk2mbmp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG5LFGYb3V"><g class="hv130ab-t"><path class="ms27-ub9z"/><path class="piwg5-x2u"/><path class="czqk2mbmp"/></g></mask></defs><path mask="url(#SVG5LFGYb3V)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:vertically-centered",
	});
}

export default Component;
