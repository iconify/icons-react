import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/m/mgt481b0m.css';
import '../../css/z/z6atkwxdb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRBykTdYC"><g class="wwvp95byt"><path class="mgt481b0m"/><path class="z6atkwxdb"/></g></mask></defs><path mask="url(#SVGRBykTdYC)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:nurse-cap",
	});
}

export default Component;
