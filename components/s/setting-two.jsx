import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/h/h1s4q_nxt.css';
import '../../css/v/vldudygfx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGAM6pX7oM"><g class="ufeehvblu"><path class="h1s4q_nxt"/><path class="vldudygfx"/></g></mask></defs><path mask="url(#SVGAM6pX7oM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:setting-two",
	});
}

export default Component;
