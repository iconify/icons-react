import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/t/toaurny5c.css';
import '../../css/e/ehmcl--bc.css';
import '../../css/x/xwvmvxbma.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGC6Levd3r"><g class="wwvp95byt"><path class="toaurny5c"/><path class="ehmcl--bc"/><path class="xwvmvxbma"/></g></mask></defs><path mask="url(#SVGC6Levd3r)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:measuring-cup",
	});
}

export default Component;
