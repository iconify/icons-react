import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/ytep93bao.css';
import '../../css/j/j5_2do9_g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGPoxM4bnA"><g class="ufeehvblu"><path class="ytep93bao"/><path class="j5_2do9_g"/></g></mask></defs><path mask="url(#SVGPoxM4bnA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:topic",
	});
}

export default Component;
