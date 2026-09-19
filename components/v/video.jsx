import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/p/p22wnqbnw.css';
import '../../css/q/qcxk7gt6m.css';
import '../../css/l/ljwwyjb-f.css';
import '../../css/r/r_ox37bby.css';
import '../../css/j/jxacbfbej.css';
import '../../css/n/nsaay5gbc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGGtJqeeph"><g class="ufeehvblu"><path class="p22wnqbnw"/><path class="qcxk7gt6m"/><path class="ljwwyjb-f"/><path class="r_ox37bby"/><path class="jxacbfbej"/><path class="nsaay5gbc"/></g></mask></defs><path mask="url(#SVGGtJqeeph)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:video",
	});
}

export default Component;
