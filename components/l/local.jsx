import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/z/zdhb83szs.css';
import '../../css/r/rpsd5vp5o.css';
import '../../css/r/rsvuxndka.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGKpq6fc5u"><g class="ufeehvblu"><path class="zdhb83szs"/><path class="rpsd5vp5o"/><path class="rsvuxndka"/></g></mask></defs><path mask="url(#SVGKpq6fc5u)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:local",
	});
}

export default Component;
