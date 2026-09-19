import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tcvle1blf.css';
import '../../css/n/n-xbr3p_n.css';
import '../../css/k/kymfg3bmi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6kMRMcjV"><g class="ft5dv1b6b"><rect class="tcvle1blf"/><path class="n-xbr3p_n"/><rect transform="rotate(90 15 29)" class="kymfg3bmi"/></g></mask></defs><path mask="url(#SVG6kMRMcjV)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:painted-screen",
	});
}

export default Component;
