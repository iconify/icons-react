import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/w/wkaq4nb8y.css';
import '../../css/c/chwdkhbaz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxIXYQbJu"><g class="ufeehvblu"><path class="wkaq4nb8y"/><path class="chwdkhbaz"/></g></mask></defs><path mask="url(#SVGxIXYQbJu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:pay-code",
	});
}

export default Component;
