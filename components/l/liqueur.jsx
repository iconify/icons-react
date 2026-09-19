import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/z/znnlwu8uj.css';
import '../../css/k/kunopmwkl.css';
import '../../css/e/ejulgip2j.css';
import '../../css/p/poge4sbjc.css';
import '../../css/s/s75frwbdj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgMIeFdtB"><g class="gopnm44um"><path class="znnlwu8uj"/><path class="kunopmwkl"/><path class="ejulgip2j"/><path class="poge4sbjc"/><path class="s75frwbdj"/></g></mask></defs><path mask="url(#SVGgMIeFdtB)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:liqueur",
	});
}

export default Component;
