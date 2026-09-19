import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/w/wqt01gb2m.css';
import '../../css/u/uouile4nz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGHfF3VcIU"><g class="ufeehvblu"><path class="wqt01gb2m"/><path class="uouile4nz"/></g></mask></defs><path mask="url(#SVGHfF3VcIU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:notes",
	});
}

export default Component;
