import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/a/azokiuq7x.css';
import '../../css/q/q3jhrhbxa.css';
import '../../css/c/ctmd9xbxy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOjViQcyF"><g class="s9cl3zbei"><path clip-rule="evenodd" class="azokiuq7x"/><path class="q3jhrhbxa"/><path class="ctmd9xbxy"/></g></mask></defs><path mask="url(#SVGOjViQcyF)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:mask",
	});
}

export default Component;
