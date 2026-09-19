import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/mzszod_2j.css';
import '../../css/p/p5_dofibb.css';
import '../../css/p/p7hn-sb3e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGBoBbid3e"><g class="s9cl3zbei"><circle class="mzszod_2j"/><path class="p5_dofibb"/><path class="p7hn-sb3e"/></g></mask></defs><path mask="url(#SVGBoBbid3e)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:jewelry",
	});
}

export default Component;
