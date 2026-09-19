import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/m/mzszod_2j.css';
import '../../css/v/v0ki-vbca.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwywZYbqH"><g class="wwvp95byt"><circle class="mzszod_2j"/><path class="v0ki-vbca"/></g></mask></defs><path mask="url(#SVGwywZYbqH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:red-cross",
	});
}

export default Component;
