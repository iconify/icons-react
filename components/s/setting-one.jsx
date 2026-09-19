import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/t/t3j6luy7a.css';
import '../../css/u/uowmflbel.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9e55ocrc"><g class="ufeehvblu"><path class="t3j6luy7a"/><path class="uowmflbel"/></g></mask></defs><path mask="url(#SVG9e55ocrc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:setting-one",
	});
}

export default Component;
