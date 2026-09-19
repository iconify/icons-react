import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/e/enddguneu.css';
import '../../css/b/bwaukbb3s.css';
import '../../css/c/c4-ix0aca.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRiMS8beK"><g class="ufeehvblu"><path class="enddguneu"/><path class="bwaukbb3s"/><path class="c4-ix0aca"/></g></mask></defs><path mask="url(#SVGRiMS8beK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:thermometer",
	});
}

export default Component;
