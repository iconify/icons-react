import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/w/wdquz8zei.css';
import '../../css/a/aewvl6b9u.css';
import '../../css/e/e8-dxttjj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGaaefmvJT"><g class="ufeehvblu"><path class="wdquz8zei"/><path class="aewvl6b9u"/><path class="e8-dxttjj"/></g></mask></defs><path mask="url(#SVGaaefmvJT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:sim",
	});
}

export default Component;
